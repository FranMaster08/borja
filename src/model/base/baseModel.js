class baseModel {
  database = "";
  constructor(database) {
    this.database = database;
  }
  async create(entity) {
    try {
        this.database.create()
    } catch (error) {
        
    }
  }
  async update(id, entity) {}
  async delete(id) {}
  async findAll() {}
  async findOne(id) {}
}
