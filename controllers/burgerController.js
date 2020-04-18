const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((burgers) => {
    const templateData = {
      burgers: burgers,
      burgersjson: JSON.stringify(burgers, null, 4),
    };

    res.render("index", templateData);
  });
});

module.exports = router;
