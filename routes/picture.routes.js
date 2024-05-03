const { authJwt } = require("../middleware");
const pictures_сontroller = require("../controllers/picture.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });



app.post(
  "/picture/upload", 
    pictures_сontroller.uploadImage
  );
    
app.get(
  '/getAllImages/:product_id',
  pictures_сontroller.getAllImages);
};