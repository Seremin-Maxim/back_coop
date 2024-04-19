const db = require("../models");
const Category = db.Category;

/*
exports.getOne = (req, res) => {
    
};

*/

exports.createCategory = (req, res) => {
    const name = req.body.name;
    const category = Category.create({name});
    return res.json(category);
};

exports.getCategoryIdByName = async (req, res) => {
    const name = req.params.name_category;
    //console.log("category_name_in_prod ========== ", name);
    const category = await Category.findOne({ where: { name: name } });
    if (category) {
        return res.json(category.id);
    } else {
        return res.status(404).send({ message: "category not found" });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        return res.json(categories);
    } catch (error) {
        console.error('Ошибка при получении категорий:', error);
        return res.status(500).json({ error: 'Ошибка при получении категорий' });
    }
};