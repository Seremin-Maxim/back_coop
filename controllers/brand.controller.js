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


