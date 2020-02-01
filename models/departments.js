module.exports = function(sequelize, DataTypes) {
    const Model = sequelize.define('Department', {
        departmentName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numEmployees:{
            type: DataTypes.INTEGER
        },
        Budget: {
            type: DataTypes.INTEGER
        }
    });

    Model.associate = function(models) {
        models.Department.hasMany(models.Employee);
    };

    return Model;

};