require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");



class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.rutas();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json({ extende: true, parameterLimit: 10000000000000 , limit: '100000mb'}));
    this.app.use(morgan("dev"));

  }



  rutas() {
    this.app.use(require("./routes/test.router"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
