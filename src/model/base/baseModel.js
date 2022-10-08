class baseModel {
  table = "";
  constructor(table) {
    this.table = table;
  }
  async create(entity) {
    try {
      const datos = await this.table.create(entity);
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.table.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = baseModel;
