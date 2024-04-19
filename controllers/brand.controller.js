const db = require("../models");
const Brand = db.Brands;

/*
exports.getOne = (req, res) => {
    
};

*/

exports.createBrand = (req, res) => {
    const name = req.body.name;
    const brand = Brand.create({name});
    return res.json(brand);
};

exports.getBrandIdByName = async (req, res) => {
    const name = req.params.name;
    const brand = await Brand.findOne({ where: { name: name } });
    if (brand) {
        return res.json(brand.id);
    } else {
        return res.status(404).send({ message: "Brand not found" });
    }
};

exports.getAllBrands = async (req, res) => {
    const brands = await Brand.findAll();
    if (brands) {
        return res.json(brands);
    } else {
        return res.status(404).send({ message: "Brands not found =               =============================" });
    }
};




