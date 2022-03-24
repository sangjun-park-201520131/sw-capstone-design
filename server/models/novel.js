const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('novel', {
    novelTitle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    novelDescription: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    novelGenre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    novelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    User_userID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'userID'
      }
    },
    coverFileName: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'novel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "novelID" },
          { name: "User_userID" },
        ]
      },
      {
        name: "novelID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "novelID" },
        ]
      },
      {
        name: "fk_Novel_User1_idx",
        using: "BTREE",
        fields: [
          { name: "User_userID" },
        ]
      },
    ]
  });
};