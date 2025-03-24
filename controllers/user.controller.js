const {userModel} = require('../models/user.model');


exports.listAll = async (req, res, next) => {
    let msg = []; // biến chứa danh sách câu thông báo
    let list = [];
    try {
        // thêm điều kiện lọc
        let dk = null;
        if(typeof(req.query.username) != 'undefined'){
            dk = {username: req.query.username}
        }
        // nếu có các điều kiện lọc khác thì viết thêm lệnh if..
 
 
        list = await userModel.find(  dk  );
       
    } catch (error) {
        msg.push(error.message)
    }
    res.render('user/list', {listUser: list, msg: msg});
 }
 exports.getOne = async( req, res, next)=>{
    let msg = []; // biến chứa danh sách câu thông báo
    let objU = null;
    try {
        let id = req.params.id;
        objU = await userModel.findById(id);
 
 
    } catch (e) {
        msg.push(e.message);
    }
 
 
    res.render('user/view', {objU: objU, msg: msg});
 }
 
 exports.add = async (req, res, next)=>{
    let msg = []; // biến chứa danh sách câu thông báo
    try {
        if(req.method == 'POST'){
            //1. lấy dữ liệu:
            let {username, email, passwd, fullname} = req.body;
            //2. Validate dữ liệu
            if(username.length <3){
                msg.push('Cần nhập username ít nhất 3 ký tự');
                return res.render('user/add',{msg:msg}); // thoát khỏi hàm luôn
            }
            // làm tương tự với các trường dữ liệu khác
            // sau khi code validate hết các tình huống thì lưu dữ liệu
 
 
            let objU = new userModel();
            objU.username = username;
            objU.email = email;
            objU.passwd = passwd; // nếu mã hóa pass thì viết ở đây
            objU.fullname = fullname;
            // ghi vào CSDL
            let qk = await objU.save();
           
            // lưu thành công thì chuyển về danh sách hoặc ở lại màn hình thêm thì tùy
            return res.redirect('/users');
        }
 
 
    } catch (error) {
       msg.push(error.message)
 
 
    }
    res.render('user/add',{msg:msg});
 }
 exports.edit = async (req, res, next)=>{
    let msg = [];
    let objU = null;
    try {
 
 
        //lấy thông tin sản phẩm cần sửa: copy ở chức năng xem chi tiết
        let id = req.params.id;
        objU = await userModel.findById(id);
        if(objU == null){
            msg.push("Không tồn tại user cần sửa");
            return res.render('user/edit', {msg: msg, objU : objU});
        }
        if(req.method=='POST'){
            //1. lấy dữ liệu:
            let {username, email, passwd, fullname} = req.body;
            //2. Validate dữ liệu
            if(username.length <3){
                msg.push('Cần nhập username ít nhất 3 ký tự');
                return res.render('user/edit', {msg: msg, objU : objU}); // thoát khỏi hàm
            }
 
 
            /// tạo đối tượng lưu vào csdl
            // let objUpdate = {};
            // objUpdate.username = username;
            //....
            // hoặc lấy luôn req.body nếu các trường dữ liệu thống nhất giống nhau
            let objUpdate = req.body;
           
            // ghi vào CSDL
            await userModel.findByIdAndUpdate(id, objUpdate);
 
 
            msg.push("Cập nhật thành công");
            // có thể chuyển trang nếu muốn.
 
 
        }
                 
    } catch (error) {
        msg.push( error.message )
    }
    res.render('user/edit', {msg: msg, objU : objU});
 }
 
 
 
 

