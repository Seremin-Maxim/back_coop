const { where } = require('sequelize');
const db = require('../models');
const uuid = require('uuid');
const path = require('path');
const Pictures = db.Pictures;
const Product = db.Product;

exports.uploadImage = async (req, res) => {
    try {
        const product_name = req.body.product_name;
        const product = await Product.findOne({ where: { product_name: product_name } });
        const product_id = product.id;
        const img = req.files.img;
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','images',fileName))

        console.log("CARTIIIIIIIIIIIIIIIINKA =", img)
        console.log("NAME =======================================" + req.body.product_name);
        const picture = await Pictures.create({
            product_id: product_id,
            path: fileName
        });
        return res.json(picture);
    } catch (error) {
        console.error('Ошибка при создание фото продукта:', error);
        return res.status(500).json({ error: 'Ошибка при создание фото продукта' });
    }
};

exports.getAllImages = async (req, res) => {
    try {
        const product_id = req.params.product_id;
        console.log('PROD_ID' + product_id);
        const pictures = await Pictures.findAll({ where: { product_id: product_id } });
        return res.json(pictures);
    } catch (error) {
        console.error('Ошибка при получении фото продукта:', error);
        return res.status(500).json({ error: 'Ошибка при получении фото продукта' });
    }
};



