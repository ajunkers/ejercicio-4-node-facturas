const { generaError } = require("../utils/errores");
const facturasJSON = require("../utils/datos");

const getFacturas = () => facturasJSON;

const getFacturasTipos = tipo => {
  const facturas = facturasJSON.then(factura => factura.filter(factura => factura.tipo === tipo));
  return (facturas);
};

const getFactura = id => {
  const factura = facturasJSON.then(factura => factura.find(factura => factura.id === id));
  return (factura);
};

module.exports = {
  getFacturas,
  getFacturasTipos,
  getFactura
};
