var express = require("express");
var router = express.Router();
var apimodels = require("../model/apimodels");

const apiStart = (app) => {
  //sản phẩm
  router.get('/product', apimodels.getAllGiay);
  router.get('/product/:id', apimodels.getCategoryByID);
  router.post('/createGiay', apimodels.createGiay);
  router.post('/createloai', apimodels.createCategory);
  router.put('/updateGiay', apimodels.updateGiay);
  router.delete('/deleteGiay/:id', apimodels.deleteGiay);
  //loại sản phẩm
  router.get('/loaisp', apimodels.getAllLoaiSP);
  router.get('/loaisp/:id', apimodels.getCategoryByIDLoaiSP);
  router.post('/createLoaiSP', apimodels.createLoaiSP);
  router.post('/createloai', apimodels.createCategoryLoaiSP);
  router.put('/updateLoaiSP', apimodels.updateLoaiSP);
  router.delete('/deleteLoaiSP/:id', apimodels.deleteLoaiSP);
  //order
  router.get('/donhang', apimodels.getAllDonHang);
  router.get('/donhang/:id', apimodels.getCategoryByIDDonHang);
  router.post('/createDonHang', apimodels.createDonHang);
  router.put('/updateDonHang', apimodels.updateDonHang);
  router.delete('/deleteDonHang/:id', apimodels.deleteDonHang);
  //order_detail
  router.get('/order_detail', apimodels.getAllOrderDetail);
  router.get('/order_detail/:id', apimodels.getCategoryByIDOrderDetail);
  router.post('/createOrderDetail', apimodels.createOrderDetail);
  router.put('/updateOrderDetail', apimodels.updateOrderDetail);
  router.delete('/deleteOrderDetail/:id', apimodels.deleteOrderDetail);
  //user
  router.get('/getAllUser', apimodels.getAllUser);
  router.get('/getUserID/:id', apimodels.getUserID);
  router.post('/createuser', apimodels.createUser);
  router.put('/updateUser', apimodels.updateUser);
  router.delete('/deleteUser/:id', apimodels.deleteUser);
  router.post('/login', apimodels.login);
  //
  return app.use("/api/v1", router);
};
module.exports = apiStart;
