const { authJwt } = require("../middleware");
const category_controller = require("../controllers/category.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
        "/category/create",
        category_controller.createCategory
    );

    app.get(
      "/getcategoryID/:name_category",
      category_controller.getCategoryIdByName
  );
  app.get(
    "/getAllCategories",
    category_controller.getAllCategories
);


};