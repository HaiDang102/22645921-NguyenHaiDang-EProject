require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://localhost/orders',
    // Sửa dòng này để sử dụng tên dịch vụ của RabbitMQ
    // trong docker-compose.yml (tức là "rabbitmq")
    rabbitMQURI: process.env.RABBITMQ_URL || 'amqp://localhost',
    rabbitMQQueue: 'orders',
    port: 3002,
};