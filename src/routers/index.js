const express = require("express");

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});


module.exports = { appRouter };
