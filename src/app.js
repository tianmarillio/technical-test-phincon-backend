const express = require("express");
const cors = require('cors')

require("express-async-errors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { appRouter } = require("./routers");
const { errorHandler } = require("./error/error_handler");
const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(appRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
