module.exports = function(sequelize, DataTypes) {
    const Model = sequelize.define('Department', {
        departmentName:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Model;
}