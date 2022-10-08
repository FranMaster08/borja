const { Router } = require("express");
const { user } = require("../controller");

const routes = Router();

routes.get("/", user.find);
routes.post("/", user.create);

module.exports = routes;
