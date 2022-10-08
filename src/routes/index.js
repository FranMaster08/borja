const { Router } = require("express");
const userRouter = require("./user.routes");

const routes = Router();


routes.get("/", (req, res) => {
  res.send("Hola Mundo");
});
routes.use("/user", userRouter);

module.exports = routes;
