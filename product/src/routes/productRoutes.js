const express = require("express");
const ProductController = require("../controllers/productController");
const isAuthenticated = require("../utils/isAuthenticated");

const router = express.Router();
const productController = new ProductController();

router.post("/", isAuthenticated, productController.createProduct);
router.post("/buy", isAuthenticated, productController.createOrder);
router.get("/", isAuthenticated, productController.getProducts);

// CODE THÊM CHO CÂU SỐ 8 
// Dùng tham số động ":id" để lấy Order ID từ URL, và dùng hàm getOrderStatus
router.get("/:id", isAuthenticated, productController.getOrderStatus);

router.get("/order-status/:orderId", isAuthenticated, productController.getOrderStatus);

module.exports = router;