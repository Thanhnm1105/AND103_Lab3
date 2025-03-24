const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thanh11:111105@mydatabase.bn1mn.mongodb.net/User')
       .catch( (err)=>{
           console.log('Loi ket noi CSDL');
           console.log(err);
           throw new Error("Lỗi kết nối CSDL");
       });


module.exports = {mongoose}
