const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    status: { type: String, enum: ['Mới', 'Cũ'], required: true },
    description: { type: String },
    image: { type: String }
}, {
    collection: 'cars' // Đảm bảo đúng tên collection
});

const Car = mongoose.model('Car', carSchema); // Định nghĩa model

module.exports = Car; // Xuất đúng cách (Không bọc trong object)
