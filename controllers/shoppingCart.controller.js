const { where } = require("sequelize");
const db = require("../models");
const ShC = db.ShoppingCarts;
const ShCDevice = db.ShoppingCart_Devices;

exports.createShoppingCart = async (req, res) => {
    try{
        const user_id = req.params.customer_id;
        //console.log("CREATION OF SHC !!!!!!!!!!!!!!!!" + " IDD ===========" + user_id);
        const shc = await ShC.create({customer_id: user_id});
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
        console.log("CREATION OF SHC_DEVICE !!!!!!!!!!!!!!!! PROD_ID ===" + prod_id + " QUAN ===" + quantity + "SHC_ID ==" + shc_id);
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
        //console.log("CREATION OF SHC_DEVICE !!!!!!!!!!!!!!!! PROD_ID ===" + prod_id + " QUAN ===" + quantity + "SHC_ID ==" + shc_id);
        const shc = await ShC.findOne({ where: { customer_id: customer_id } })
        return res.json(shc);
    }catch (error) {
        console.error('Ошибка при создании SCH_DEVICE:', error);
        return res.status(500).json({ error: 'Ошибка при создании SCH_DEVICE' });
    }

};





