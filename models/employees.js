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

    Model.associate = function(models){
        models.Employee.belongsTo(models.Department);
        models.Employee.hasMany(models.Clockin);
        models.Employee.hasMany(models.Clockout);
    };

    return Model;
}