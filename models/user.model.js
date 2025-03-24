const db = require('./db');


// định nghĩa khuôn mẫu cho model
const userSchema = new db.mongoose.Schema(
   {
       username: {type: String, required: true},
       email: {type: String, required:true},
       passwd: {type: String, required: false},
       fullname: {type: String, required: false}
   },
   {
       collection:'users' // tên bảng dữ liệu
   }
)
// tạo model
let userModel = db.mongoose.model('userModel', userSchema);
module.exports = {userModel};
