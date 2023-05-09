const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
        isEven(value) {
          if (value < 1 || value > 5){
            throw new Error ("La dificultad debe ser entre 1 y 5")
          }
        }
      }
    },
    
    duration: {
      type: DataTypes.INTEGER,
    },

    season: {
      type: DataTypes.ENUM("Verano", "Invierno", "Otoño", "Primavera"),
      allowNull: false,
    },

  },{timestaps: false});
};
