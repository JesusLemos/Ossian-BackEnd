'User strict';
module.exports = (sequelize, DataTypes) => {
    const Agenda = sequelize.define('Agenda', {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
              notNull: { msg: "El campo es requerido" },
            },
            
        },
        apellido: {
            type: DataTypes.BIGINT(8),
            allowNull: true,
            // validate: {
            //   notNull: { msg: "El campo es requerido" },
            
            // },
        },
        telefono: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
            notNull: { msg: "El campo es requerido" },
            isInt:{msg:"El campo debe ser numeros"}
            },
        },
        correo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
            notNull: { msg: "El campo es requerido" },
            isEmail:{msg:"El campo debe ser un correo electronico"}
        },
    


 } ,} ,
 {tableName: 'Agendas'});
    return Agenda;

};