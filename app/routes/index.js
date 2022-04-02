module.exports = app => {
  const controller = require('../controllers/index')
  let router = require("express").Router();
  router.get("/shows", controller.getShows);
  app.use('/api', router);
};