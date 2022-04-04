const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usercomment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chapter',
        key: 'id'
      }
    },
    Chapter_Novel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chapter',
        key: 'Novel_id'
      }
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likeCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usercomment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Chapter_id" },
          { name: "Chapter_Novel_id" },
        ]
      },
      {
        name: "fk_UserComment_Chapter1",
        using: "BTREE",
        fields: [
          { name: "Chapter_id" },
          { name: "Chapter_Novel_id" },
        ]
      },
    ]
  });
};
