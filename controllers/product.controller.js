const db = require("../models");
const Product = db.Product;
const Product_Info = db.Product_Info;

exports.createProduct = async (req, res) => {
    try {
        const category_id = req.params.category_id;
        const brand_id = req.params.brand_id;
        //console.log("category_id ========== ", category_id);
        //console.log("brand_id ========== ", brand_id);
        console.log("NAME =======================================" + req.body.product_name);
        const prod = await Product.create({
            category_id: req.body.category_id,
            brand_id: req.body.brand_id,
            SDK: req.body.SDK,
            price: req.body.price,
            stock: req.body.stock,
            product_name: req.body.product_name
        });
        return res.json(prod);
    } catch (error) {
        console.error('Ошибка при создании продукта:', error);
        return res.status(500).json({ error: 'Ошибка при создании продукта' });
    }
};
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        return res.json(products);
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
        return res.status(500).json({ error: 'Ошибка при получении товаров' });
    }
};


exports.createProductInfo = async (req, res) => {
    try {
        const prod_id = req.params.product_id;
        //console.log("INFA O PRODUCTE ==========" + prod_id + " " + " " + req.body.title + " " + req.body.description);
        const product_info = await Product_Info.create({
            product_id: prod_id,
            title: req.body.title,
            description: req.body.description
        });
        
        return res.json(product_info);
    } catch (error) {
        console.error('Ошибка при создании описания продукта:', error);
        return res.status(500).json({ error: 'Ошибка при создании описания продукта' });
    }
};

exports.productGetDescription = async (req, res) => {
    const prod_id = req.params.product_id;
    //console.log("ID V CONTL DESCRIPTIONA ==============" + prod_id);
    
    try {
        const product_info = await Product_Info.findOne({ where: { product_id: prod_id } });
        
        if (product_info) {
            //console.log("INFO ================ " + product_info.title);
            return res.json(product_info);
        } else {
            console.log('Товар не найден');
            return res.status(404).json({ error: 'Товар не найден' });
        }
    } catch (error) {
        console.log('Ошибка при получении описания товара:', error);
        return res.status(500).json({ error: 'Ошибка при получении описания товара' });
    }
};

exports.getProductsByCategory = async (req, res) => {
    const category_id_local = req.params.category_id;
    //console.log("CATEGORY ID IN GETPRODBYCAT ==============" + category_id_local);
    
    try {
        const products = await Product.findAll({ where: { category_id:  category_id_local} });
    
        if (products) {
            return res.json(products);
        } else {
            console.log('Товары по данной категории не найдены');
            return res.status(404).json({ error: 'Товары по данной категории не найдены' });
        }
    } catch (error) {
        console.log('Товары по данной категории не найдены', error);
        return res.status(500).json({ error: 'Товары по данной категории не найдены' });
    }
};

exports.getProductById = async (req, res) => {
    const prod_id = req.params.id;
    //console.log("CATEGORY ID IN GETPRODBYCAT ==============" + category_id_local);
    
    try {
        //console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUU : " + prod_id);
        const product = await Product.findOne({ where: { id:  prod_id} });
    
        if (product) {
            return res.json(product);
        } else {
            console.log('Товар по данному айди не найден');
            return res.status(404).json({ error: 'ТТовар по данному айди не найден' });
        }
    } catch (error) {
        console.log('Товар по данному айди не найден', error);
        return res.status(500).json({ error: 'Товар по данному айди не найден' });
    }
};

exports.getProductsByBrand = async (req, res) => {
    const brand_id_local = req.params.brand_id;
    //console.log("CATEGORY ID IN GETPRODBYCAT ==============" + category_id_local);
    
    try {
        const products = await Product.findAll({ where: { brand_id:  brand_id_local} });
    
        if (products) {
            return res.json(products);
        } else {
            console.log('Товары по данному бренду не найдены');
            return res.status(404).json({ error: 'Товары по данному бренду не найдены' });
        }
    } catch (error) {
        console.log('Товары по данному бренду не найдены', error);
        return res.status(500).json({ error: 'Товары по данному бренду не найдены' });
    }
};

