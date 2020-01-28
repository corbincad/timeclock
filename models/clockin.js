module.exports = function(sequelize, DataTypes){
    const Model = sequelize.define('Clockin', {
        timeId: DataTypes.STRING
    });

    Model.associate = function(models){
        models.Clockin.belongsTo(models.Employee);
    };

    return Model;

}