const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coin: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
    ]
  });
};
