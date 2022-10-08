const db = require("../database/models");
const BaseModel = require("./base/baseModel");
class teacherModel extends BaseModel {
  constructor(db) {
    super(db.teachers);
  }
}
module.exports = teacherModel;
