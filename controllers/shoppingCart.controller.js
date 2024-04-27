const { where } = require("sequelize");
const db = require("../models");
const ShoppingCart = db.ShoppingCarts;
const ShCDevice = db.ShoppingCart_Devices;

exports.createShoppingCart = async (req, res) => {
    try{
        const user_id = req.params.customer_id;
        const shc = await ShoppingCart.create({customer_id: user_id});
        return res.json(shc);
    }catch (error) {
        console.error('Ошибка при создании SCH:', error);
        return res.status(500).json({ error: 'Ошибка при создании SCH' });
    }
};

exports.createShoppingCartDevice = async (req, res) => {
    try{
        const prod_id = req.params.product_id;
        const quantity = req.body.quantity;
        const shc_id = req.body.shc_id;
        const shc_device = await ShCDevice.create({
            product_id : prod_id,
            shc_id : shc_id,
            quantity: quantity
        })
        return res.json(shc_device);
    }catch (error) {
        console.error('Ошибка при создании SCH_DEVICE:', error);
        return res.status(500).json({ error: 'Ошибка при создании SCH_DEVICE' });
    }

};

//getSCHIDByCustomer

exports.getSCHIDByCustomer = async (req, res) => {
    try{
        const customer_id = req.params.customer_id;
        const shoppingCart = await ShoppingCart.findOne({ where: { customer_id: customer_id } })
        return res.json(shoppingCart);
    }catch (error) {
        console.error('Ошибка при getSCHIDByCustomer:', error);
        return res.status(500).json({ error: 'Ошибка при getSCHIDByCustomer' });
    }

};

exports.getAllShCDevicesFromByID = async (req, res) => {
    try{
        const shc_id = req.params.shc_id;
        //console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO SHC_ID +++++==" + shc_id);
        const shoppingCart_Devices = await ShCDevice.findAll({ where: { shc_id: shc_id } })
        return res.json(shoppingCart_Devices);
    }catch (error) {
        console.error('Ошибка при создании SCH_DEVICE:', error);
        return res.status(500).json({ error: 'Ошибка при создании SCH_DEVICE' });
    }

};

exports.deleteShCDevice = async (req, res) => {
    try{
        const id = req.params.product_id;
        const shc_device = await ShCDevice.destroy({
            where: {  product_id: id }
        })
        if (shc_device) {
            
            return res.json({ message: 'ShcDevice успешно удален' });
        } else {
            
            return res.status(404).json({ error: 'ShcDevice не найден' });
        }
    }catch (error) {
        console.error('Ошибка при удалении SCH_DEVICE:', error);
        return res.status(500).json({ error: 'Ошибка при удалении SCH_DEVICE' });
    }

};

exports.updateShoppingCartDevice = async (req, res) => {
    try{
        const prod_id = req.params.product_id;
        const newQuantity = req.body.quantity;
        const stock = req.body.stock;

        const currentDevice = await ShCDevice.findOne({ where: { product_id: prod_id } });
        if (!currentDevice) {
            return res.status(404).json({ error: 'Устройство не найдено' });
        }

        // Обновляем количество
        const updatedQuantity = currentDevice.quantity + newQuantity;
        if (updatedQuantity > stock) {
            return res.status(400).json({ error: 'Недостаточно товара на складе' });
        }

        const shc_device = await ShCDevice.update(
            { quantity: updatedQuantity },
            { where: { product_id: prod_id } }
        )

        if (shc_device[0] !== 0) {
            return res.json({ message: 'Устройство успешно обновлено' });
        } else {
            return res.status(404).json({ error: 'Устройство не найдено' });
        }
    }catch (error) {
        console.error('Ошибка при обновлении SCH_DEVICE:', error);
        return res.status(500).json({ error: 'Ошибка при обновлении SCH_DEVICE' });
    }
};

exports.checkIfExistsShoppingCartDevice = async (req, res) => {
    try {
        const prod_id = req.params.product_id;
        console.log("ID =========================" + prod_id);
        const shc_device = await ShCDevice.findOne({ where: { product_id: prod_id } });
        if (shc_device) {
            console.log("it exists !!!!!!!!!!!!!!!");
            return res.json({ product_exists: true, shc_device: shc_device });
        } else {
            console.log("no such item (((((((((((((((((((");
            return res.json({ product_exists: false });
        }
    } catch (error) {
        console.error('Ошибка при получении SCH_DEVICE:', error);
        return res.status(500).json({ error: 'Ошибка при получении SCH_DEVICE' });
    }
};

















