const db = require("../models/db.setup");
const User = db.user;
const Op = db.Sequelize.Op;
exports.UserCreate = (req, res) => {
    const name = req.body.name;
    const email=req.body.email;
    const password= req.body.password;
      User.create({
          name:name,
          email:email,
          password:password
      })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Something Went Wrong..!!! "
          });
        });
};

exports.UserDelete = (req, res) => {
    const name = req.body.name;
      User.destroy({where : {id:name}
      })
        .then(() => {
          res.send("successfully deleted data");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Something Went Wrong..!!! "
          });
        });
};

exports.update = (req, res) => {
  
};

