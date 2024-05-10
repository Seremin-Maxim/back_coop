const { or, where } = require("sequelize");
const db = require("../models");
const Order = db.Orders;
const OrderItem = db.OrderItems;
const Product = db.Product;
exports.createOrder = async (req, res) => {
    try {
        console.log("YYYYYYYYYYYYYYYYY : ", req.body.customer_id);
        const order = await Order.create({
            address: req.body.address,
            city: req.body.city,
            date: req.body.date,
            country: req.body.country,
            zip_code: req.body.zip_code,
            state: req.body.state,
            method: req.body.method,
            customer_id: req.body.customer_id
        });
        return res.json(order);
    } catch (error) {
        console.error('Ошибка при создании order:', error);
        return res.status(500).json({ error: 'Ошибка при создании order' });
    }
};

exports.createOrderItem = async (req, res) => {
    try {
        const prod_id = req.params.product_id;
        const orderItem = await OrderItem.create({
            product_id: prod_id,
            quantity: req.body.quantity,
            order_id: req.body.order_id
        });
        return res.json(orderItem);
    } catch (error) {
        console.error('Ошибка при создании order_item:', error);
        return res.status(500).json({ error: 'Ошибка при создании order_item' });
    }
};


exports.getAllOrders = async (req, res) => {
    try {
        const customer_id = req.params.customer_id;
        console.log("OOOOOOOOOOORRRRRRRDER CustomerID : ", customer_id);
        const orders = await Order.findAll({ where: { customer_id: customer_id } });
        return res.json(orders);
    } catch (error) {
        console.error('Ошибка при посике orders:', error);
        return res.status(500).json({ error: 'Ошибка при посике orders' });
    }
};

exports.getAllOrdersItems = async (req, res) => {
    try {
        const order_id = req.params.order_id;
        const orderItems = await OrderItem.findAll({ where: { order_id: order_id } });
        return res.json(orderItems);
    } catch (error) {
        console.error('Ошибка при посике orders:', error);
        return res.status(500).json({ error: 'Ошибка при посике orders' });
    }
};

exports.getAllProductsByOrder = async (req, res) => {
    try {
        const order_id = req.params.order_id;
        const orderItems = await OrderItem.findAll({ where: { order_id: order_id } });
        const productIds = orderItems.map(item => item.product_id);
        const products = await Product.findAll({ where: { id: productIds } });
        return res.json(products);
    } catch (error) {
        console.error('Ошибка при поиске:', error);
        return res.status(500).json({ error: 'Ошибка при поиске' });
    }
};


