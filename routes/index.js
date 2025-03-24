var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*

router.post('/gioi-thieu.html', (req,res, next)=>{
      res.send("<h1>Xin chào các bạn</h1>");
 });
// vào trình duyệt địa chỉ: http://localhost:3000/gioi-thieu.html

router.put('/products/:id', (req, res, next)=>{
  // :id là tham số sau này truyền vào ID của sản phẩm
  //địa chỉ: http://localhost:3000/products/123456  thì express sẽ tự nhận 123456 là ID
  // lấy ID trên địa chỉ:
  let id = req.params.id ; // lấy id sp trên URL 
  let name = req.body.name ; // lấy tên sp qua dữ liệu put

  res.send(`ID SP = ${id}, name = ${name}`);
  // chạy demo trên postman bằng địa chỉ trên và gửi dữ liệu body là đối tượng có thuộc tính name
})

// phương thức delete
router.delete('/products/:id', (req, res, next)=>{
  let id = req.params.id ; // lấy id sp trên URL
  res.send(`Thông tin bản ghi cần xóa ID SP = ${id}`);
})


*/

module.exports = router;
