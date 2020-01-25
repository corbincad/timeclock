module.exports = function(sequelize, DataTypes){
    const Model = sequelize.define('Clockin', {
        timeId: DataTypes.STRING
    });

    return Model;
}