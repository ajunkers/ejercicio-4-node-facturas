require("dotenv").config();
const debug = require("debug")("facturas:root");
const morgan = require("morgan");
const chalk = require("chalk");
const express = require("express");
const cors = require("cors");
const options = require("./utils/paramsCLI");
const rutasFacturas = require("./rutas/facturas");

const { serverError, notFoundError, generalError } = require("./utils/errores");

const puerto = options.puerto || process.env.PUERTO || 5000;

const app = express();
const server = app.listen(puerto, () => {
  debug(chalk.yellow(`Servidor escuchando en el puerto ${puerto}`));
});

server.on("error", err => serverError(err, puerto));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/facturas", rutasFacturas);
app.get("/", (req, res, next) => {
  res.redirect("/facturas");
});
app.use(notFoundError);
app.use(generalError);
