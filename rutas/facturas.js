const express = require("express");
const { checkSchema, check, body } = require("express-validator");
const { generaError, badRequestError } = require("../utils/errores");
const { getFacturas, getFacturasTipos, getFactura } = require("../controladores/facturas");

const getFacturaSchema = () => {
  const numero = {
    errorMessage: "Debes poner un número.",
    notEmpty: true
  };
  const fecha = {
    errorMessage: "Falta La fecha de la factura.",
    notEmpty: true
  };
  const vencimiento = {
    errorMessage: "Debes poner una fecha de vencimiento en formato Timestamp.",
  };
  const concepto = {
    errorMessage: "Falta el concepto de la factura.",
  };
  const base = {
    isFloat: {
      errorMessage: "La base imponible debe ser mayor a 0.",
      notEmpty: true,
      options: {
        min: 0
      },
    }
  };
  const tipoIva = {
    isInt: {
      errorMessage: "El tipo del iva tiene que ser un número entero.",
      notEmpty: true
    }
  };
  const tipo = {
    custom: {
      errorMessage: "Falta el tipo de la factura.",
      notEmpty: true,
      options: (value) => value === "gasto" || value === "ingreso"
    }
  };
  const abonada = {
    errorMessage: "Falta si la factura está abonada o no.",
    notEmpty: true
  };
  return {
    numero,
    fecha,
    vencimiento,
    concepto,
    base,
    tipoIva,
    tipo,
    abonada
  };
};

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

const returnFactura = (facturas, res) => {
  facturas.then(factura => res.json(
    {
      total: factura.length,
      datos: factura
    }
  ));
};

router.get("/ingresos", (req, res, next) => {
  const facturas = getFacturasTipos("ingreso");
  returnFactura(facturas, res);
});

router.get("/gastos", (req, res, next) => {
  const facturas = getFacturasTipos("gasto");
  returnFactura(facturas, res);
});

router.get("/factura/:id", (req, res, next) => {
  const idFactura = +req.params.id;
  const factura = getFactura(idFactura);
  returnFactura(factura, res);
});

module.exports = router;
