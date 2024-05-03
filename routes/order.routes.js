const { authJwt } = require("../middleware");
const order_controller = require("../controllers/order.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
        "/category/order",
        order_controller.createOrder
    );


};