module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
'User', 
{
      id: { 
        allowNull: false,
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
       },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
{
      timestamps: false,
      modelName: 'users',
      underscored: true,
    },
    );
    User.associate = ({ Sale }) => {
      User.hasMany(Sale, { foreignKey: 'userId', as: 'userId' });
      User.hasMany(Sale, { foreignKey: 'seller_id', as: 'sellerId' });
    };
    return User;
  };
