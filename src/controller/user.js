const { users } = require("../model");

module.exports = {
  create: async (req, res) => {
    try {
      const { idusuarios, name, lastname, tel, mail, password } = req.body;
      if (!idusuarios || !name || !lastname || !tel || !mail || !password) {
        res.status(400).json({ message: "llene todos los campos" });
      }

      const data = await users.create({
        idusuarios,
        name,
        lastname,
        tel,
        mail,
        password,
      });

      res.json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  find: async (req, res) => {
    try {
      const data = await users.findAll();
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
