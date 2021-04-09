const fetch = require("node-fetch");

module.exports = fetch(`${process.env.FACTURAS_API}:${process.env.PUERTO_API}/facturas`)
  .then(resp => resp.json());
