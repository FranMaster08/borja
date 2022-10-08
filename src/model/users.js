const db = require("../database/models");
const BaseModel = require("./base/baseModel")

class userModel extends BaseModel {
    constructor(db){
        super(db.usuarios)
    }
}
const usuarios = new userModel(db);
usuarios.findAll().then(console.log).catch(console.error)







// const findAll = async () => {
//   try {
//     const datos = await db.usuarios.findAll();
//     console.log(datos);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const create = async (user) => {
//   try {
//     const datos = await db.usuarios.create(user);
//     console.log(datos);
//   } catch (error) {
//     console.log(error);
//   }
// };

