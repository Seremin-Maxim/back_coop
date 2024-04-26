const { authJwt } = require("../middleware");
const sh_controller = require("../controllers/shoppingCart.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
        "/shoppingCartDevice/create/:product_id",
        sh_controller.createShoppingCartDevice
    );
    
    app.post(
        "/shoppingCart/create/:customer_id",
        sh_controller.createShoppingCart
    );
    app.get(
        "/getSCHIDByCustomer/:customer_id",
        sh_controller.getSCHIDByCustomer
    );

    app.get(
        "/getAllShCDevicesByID/:shc_id",
        sh_controller.getAllShCDevicesFromByID
    )
};