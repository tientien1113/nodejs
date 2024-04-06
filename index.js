var express = require("express");
var router = express.Router();
var ejscontroller=require('../model/ejscontroller');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Chào mừng bạn đã đến với trang web" });
});
router.get("/shop", ejscontroller.getAllProduct );
module.exports = router;
