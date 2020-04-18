const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((burgers) => {
    const templateData = { burgers: JSON.stringify(burgers) };

    res.render("index", templateData);
  });
});

module.exports = router;
