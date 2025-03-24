const Car = require('../models/car.model'); 

// Lấy danh sách tất cả ô tô
exports.listAll = async (req, res) => {
    try {
        const listCars = await Car.find();

        // Kiểm tra request từ trình duyệt hay Postman
        if (req.headers.accept && req.headers.accept.includes('application/json')) {
            return res.json({ success: true, data: listCars }); 
        }

        res.render('car/list', { listCars }); 
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi lấy danh sách xe", error: error.message });
    }
};


exports.createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.redirect('/cars');
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi thêm ô tô", error: error.message });
    }
};

// Xóa ô tô theo ID
exports.deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.redirect('/cars');
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi xóa ô tô", error: error.message });
    }
};
