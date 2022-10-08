const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    idusuarios: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idusuarios" },
        ]
      },
      {
        name: "idusuarios_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idusuarios" },
        ]
      },
    ]
  });
};
