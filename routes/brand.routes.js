const { authJwt } = require("../middleware");
const brand_controller = require("../controllers/brand.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
        "/brand/create",
        brand_controller.createBrand
    );

    app.get(
      "/getbrandID/:name",
      brand_controller.getBrandIdByName
  );


};