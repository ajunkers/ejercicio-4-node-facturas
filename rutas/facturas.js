const express = require("express");
const { checkSchema, check, validationResult } = require("express-validator");
const { generaError } = require("../utils/errores");
const { getFacturas, getFactura } = require("../controladores/facturas");

const router = express.Router();
router.get("/", (req, res, next) => {
  const facturas = getFacturas();
  facturas.then(factura => res.json(
    {
      datos: factura,
      total: factura.length
    }
  ));
});

module.exports = router;
