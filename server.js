
const express = require('express');
const cors = require('cors');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const models = require("./models");
const fileUpload = require('express-fileupload');
const Role = models.Role;
const router = express.Router();
const authJwt = require("./middleware/authJwt");
const app = express();
const brand_controller = require('./controllers/brand.controller');
const category_controller = require('./controllers/category.controller');
const sh_controller = require("./controllers/shoppingCart.controller");
const userController = require('./controllers/user.controller');
const picturesController = require('./controllers/picture.controller')

app.use(cors());

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('./static'));

app.use('/images', express.static('./images'));

//app.use('/home', authJwt.verifyToken, router);
/*
app.get('/home', authJwt.verifyToken, (req, res) => {
  res.send('Доступ разрешен!');
});
*/
app.get("", (req,res)=>{
  res.send("Hell, its working...");
});

app.use(fileUpload());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/brand.routes')(app);
require('./routes/category.routes')(app);
require('./routes/product.routes')(app);
require('./routes/shoppingCart.roues')(app);
require('./routes/picture.routes')(app);
require('./routes/order.routes')(app);

//маршрут для обработки запросов профиля пользователя
app.get('api/user/profile',authJwt.verifyToken, userController.getUserProfile);
app.post('api/brand/create', brand_controller.createBrand);
app.post('api/category/create', category_controller.createCategory);

app.post('/api/picture/upload');
app.get('/api/getAllImages');


app.get('api/getbrandID');
app.get('api/getcategoryID');
app.get('api/product/create/');
app.get('api/productGetAll');
app.get('api/productGetDescription');
app.post('/api/productinfo/create');// проверить нужен ли / в конце
app.get('/api/getProductsByCategory');
app.get('/api/getAllCategories');
app.get('/api/getProductById');
app.get('/api/getAllBrands');
app.get('/api/getProductsByBrand', );
app.post('/api/shoppingCartDevice/create');
app.post('/api/shoppingCart/create');
app.get('/api/getSCHIDByCustomer/');
app.get('/api/getAllShCDevicesByID');


//ХЗ СХУЯЛИ, НО РАБОТАЕТ -> в шопингКарт.жсх
app.delete('api/deleteShCDevice');
app.delete('api/clearShoppingCart');

//НЕ РАБОТАЕТ
app.get('/api/getShoppingCartDevice');

//НЕ РАБОТАЕТ
app.put('/api/shoppingCartDevice/update');

//НЕ РАБОТАЕТ(ДУБЛИКАТ ГЕТА из 64 строки)
app.get('/api/giveMeFuckingShC_Device/');

app.get('/api/getProductByName');

app.get('/api/searchProducts');

//

app.post('/api/order/create');
app.post('/api/createOrderItem');
app.get('/api/getAllOrders');
app.get('/api/getAllOrderItems');
app.get('/api/getAllProductsByOrder');
/*
Role.bulkCreate([
  {name:"user"},
  {name:"admin"},
  {name:"moderator"}
]);
*/
app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});