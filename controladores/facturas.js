const { generaError } = require("../utils/errores");
const facturasJSON = require("../utils/datos");

const getFacturas = () => facturasJSON;

module.exports = {
  getFacturas,
};
