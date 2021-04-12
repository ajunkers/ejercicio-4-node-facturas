const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db");

const Factura = sequelize.define("Alumno", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.Date,
    allowNull: false
  },
  vencimiento: {
    type: DataTypes.Date,
    allowNull: false
  },
  concepto: {
    type: DataTypes.String(50),
    allowNull: false
  },
  base: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: false
  },
  tipoIva: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipo: {
    type: DataTypes.String(50),
    allowNull: false
  },
  abonada: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  tableName: "facturas",
  timestamps: false
});
