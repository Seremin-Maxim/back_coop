const db = require("../models");
const Customer = db.Customer; 

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };
  
  
  exports.getUserProfile = (req, res) => {
    //const customerId = localStorage.getItem("id"); 
    //console.log("local id: ", localStorage.getItem("id"));
    const customerId = req.params.userId;
    console.log('Запрос ФФФФФФФФФФФФФФФФФФФФФФФФФ req:', customerId);
    //console.log(req.customer.id, req.customer.name);
    // Проверяем, получили ли мы идентификатор пользователя из токена
    if (!customerId) {
      return res.status(401).json({ message: 'Отсутствует идентификатор пользователя в токене' });
    }
    Customer.findByPk(customerId) 
      .then(customer => {
        if (!customer) {
          
          return res.status(404).json({ message: 'Пользователь не найден' });
        }
        res.status(200).json({
          name: customer.name,
          email: customer.email,
          phone_number: customer.phone_number
        });
      })
      .catch(err => {
        console.error('Ошибка при получении профиля пользователя:', err);
        console.log("Ошибка в юзер контроллере");
        res.status(500).json({ message: 'Ошибка сервера' });
      });
  };

 