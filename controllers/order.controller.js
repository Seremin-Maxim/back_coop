const { or } = require("sequelize");
const db = require("../models");
const Order = db.Orders;
const OrderItem = db.OrderItems;
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

/*
    const addDeviceToOrderItem = async (id) => {
        try {
            const response = await Axios.delete(`/api/deleteShCDevice/${id}`);
            console.log(response.data);
            setProductIDs(product_ids.filter(item => item.product_id !== id));
            setProducts(products.filter(product => product.id !== id)); // Добавьте эту строку
        } catch (error) {
            console.error('Ошибка при удалении устройства:', error);
        }
    };
    */








