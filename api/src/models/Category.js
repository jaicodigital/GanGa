const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "category",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            name: {
                type: DataTypes.STRING,
                defaultValue: false,
            },

            subcategories: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },


        },
        { timestamps: false, paranoid: true }
    );
};
