module.exports = function(sequelize, DataTypes){
    const Model = sequelize.define('Clockout', {
        timeId: DataTypes.STRING
    });

    return Model;
};
