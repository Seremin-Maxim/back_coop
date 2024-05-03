const { authJwt } = require("../middleware");
const order_controller = require("../controllers/order.controller");
const { or } = require("sequelize");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
        "/order/create",
        order_controller.createOrder
    );

    app.post(
      "/createOrderItem/:product_id",
      order_controller.createOrderItem
    )


};