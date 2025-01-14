import routers from "./routers";
const express = require("express");
import cors from "./middleware/cors";
import * as compression from "compression";
import * as helmet from "helmet";
import * as morganLogger from "morgan";
import authenticate from "./middleware/authenticate";
import { catchErrors } from "./utils/errors";

export function init(app) {
  app.use(cors);
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.set("trust proxy", "loopback");
  app.use(compression());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  // app.use(helmet());
  app.use(morganLogger("dev"));
  app.use(catchErrors);
  app.use(routers);

app.use(`/.netlify/functions/api`, routers);
}
