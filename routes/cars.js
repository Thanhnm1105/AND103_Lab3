const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');

// Lấy danh sách ô tô
router.get('/', carController.listAll);

// Thêm ô tô mới
router.post('/add', carController.createCar);

// Xóa ô tô
router.get('/delete/:id', carController.deleteCar);

module.exports = router;
