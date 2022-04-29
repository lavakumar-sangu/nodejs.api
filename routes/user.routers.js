module.exports = () => {
    const user = require("../controllers/user.controllers");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/userlogin", user.UserCreate);
    router.post("/userdelete", user.UserDelete);
    // app.use('/api/user', router);
    return router;
  };