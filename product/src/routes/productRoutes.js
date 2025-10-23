const express = require("express");
const ProductController = require("../controllers/productController");
const isAuthenticated = require("../utils/isAuthenticated");

const router = express.Router();
const productController = new ProductController();

router.post("/", isAuthenticated, productController.createProduct);
router.post("/buy", isAuthenticated, productController.createOrder);
router.get("/", isAuthenticated, productController.getProducts);

// Thêm endpoint GET /:id để lấy thông tin sản phẩm theo ID
// router.get("/:id", isAuthenticated, productController.getProductsDetails);


module.exports = router;