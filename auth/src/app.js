const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const authMiddleware = require("./middlewares/authMiddleware");
const AuthController = require("./controllers/authController");

class App {
    constructor() {
        this.app = express();
        this.authController = new AuthController();
        this.setMiddlewares();
        this.setRoutes();
    }

    async connectDB() {
        try {
            await mongoose.connect(config.mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 10000,
            });
            console.log("✅ MongoDB connected");
        } catch (err) {
            console.error("❌ MongoDB connection error:", err);
            throw err;
        }
    }

    async disconnectDB() {
        await mongoose.disconnect();
        console.log("🛑 MongoDB disconnected");
    }

    setMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    setRoutes() {
        this.app.post("/login", (req, res) => this.authController.login(req, res));
        this.app.post("/register", (req, res) => this.authController.register(req, res));
        this.app.get("/dashboard", authMiddleware, (req, res) =>
            res.json({ message: "Welcome to dashboard" })
        );
    }

    start(port = 0) {
        // ✅ Dùng port động để tránh trùng
        this.server = this.app.listen(port, () => {
            const actualPort = this.server.address().port;
            console.log(`🚀 Server started on port ${actualPort}`);
        });
    }

    async stop() {
        if (this.server) {
            await new Promise((resolve) => this.server.close(resolve));
            console.log("🛑 Server stopped");
        }
        await mongoose.disconnect();
    }
}

module.exports = App;