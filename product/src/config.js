require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3001,

    // MongoDB URI
    mongoURI: process.env.MONGODB_PRODUCT_URI || "mongodb://localhost/products",

    // RabbitMQ connection
    rabbitMQ: {
        host: process.env.RABBITMQ_HOST || "localhost",
        port: process.env.RABBITMQ_PORT || 5672,
        user: process.env.RABBITMQ_USER || "guest",
        pass: process.env.RABBITMQ_PASS || "guest",
        uri: process.env.RABBITMQ_URI ||
            `amqp://${process.env.RABBITMQ_USER || "guest"}:${
        process.env.RABBITMQ_PASS || "guest"
      }@${process.env.RABBITMQ_HOST || "localhost"}:${
        process.env.RABBITMQ_PORT || 5672
      }`,
        exchangeName: process.env.RABBITMQ_EXCHANGE || "products",
        queueName: process.env.RABBITMQ_QUEUE || "products_queue",
    },

    // ⚡️ THÊM DÒNG NÀY để test gọi sang Auth service đúng
    authServiceUrl: process.env.AUTH_SERVICE_URL || "http://auth:3000",

    // Test user (dùng cho CI/CD testing)
    testUser: {
        username: process.env.LOGIN_TEST_USER || "testuser",
        password: process.env.LOGIN_TEST_PASSWORD || "password",
    },
};