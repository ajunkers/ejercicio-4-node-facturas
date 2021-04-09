const express = require("express");
const { checkSchema, check, validationResult } = require("express-validator");
const { generaError } = require("../utils/errores");
const { getFacturas, getFacturasTipos, getFactura } = require("../controladores/facturas");

const router = express.Router();
router.get("/", (req, res, next) => {
  const facturas = getFacturas();
  facturas.then(factura => res.json(
    {
      total: factura.length,
      datos: factura
    }
  ));
});

router.get("/ingresos", (req, res, next) => {
  const facturas = getFacturasTipos("ingreso");
  facturas.then(factura => res.json(
    {
      total: factura.length,
      datos: factura
    }
  ));
});

router.get("/gastos", (req, res, next) => {
  const facturas = getFacturasTipos("gasto");
  facturas.then(factura => res.json(
    {
      total: factura.length,
      datos: factura
    }
  ));
});

router.get("/factura/:id", (req, res, next) => {
  const idFactura = +req.params.id;
  const factura = getFactura(idFactura);
  factura.then(itemFactura => res.json(
    itemFactura
  ));
});

module.exports = router;
