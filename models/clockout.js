module.exports = function(sequelize, DataTypes){
    const Model = sequelize.define('Clockout', {
        timeId: DataTypes.STRING
    });

    Model.associate = function(models) {
        models.Clockout.belongsTo(models.Employee);
        models.Clockout.belongsTo(models.Clockin);
    };

    return Model;

};
