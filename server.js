const express = require("express");
const exphbs = require("express-handlebars");
const burgerControllerRoutes = require("./controllers/burgerController");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(burgerControllerRoutes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
