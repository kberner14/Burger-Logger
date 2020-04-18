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

router.post("/api/burgers", (req, res) => {
  const newBurgerText = req.body.text;

  const seeOther = 303;
  burger.create(newBurgerText, () => {
    res.redirect(seeOther, "/");
  });
});

module.exports = router;
