const { authJwt } = require("../middleware");
const product_controller = require("../controllers/product.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
      "/product/create/:category_id/:brand_id",
      product_controller.createProduct
  );
      
    app.get(
    "/productGetAll",
    product_controller.getProducts
  );

  app.post(
    "/productinfo/create/:product_id",
    product_controller.createProductInfo
  )

  app.get(
    "/productGetDescription/:product_id",
    product_controller.productGetDescription
  );


  app.get(
    "/getProductsByCategory/:category_id",
    product_controller.getProductsByCategory
  );
  app.get(
    "/getProductById/:id",
    product_controller.getProductById
  )
  
  app.get(
    "/getProductsByBrand/:brand_id",
    product_controller.getProductsByBrand
  )

  app.get(
    "/getProductByName",
    product_controller.getProductByName
  );

  app.get("/searchProducts",
  product_controller.searchProducts
);


    

};