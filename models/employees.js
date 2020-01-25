module.exports = function(sequelize, DataTypes){
    const Model = sequelize.define('Employee', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Model;
}