// 1、引入`mongoose connect`
require('./connect');

// 2、引入`User` Model
var User = require('./user');

user=new User({
  username:'朱子恒',password:'123456'
});;

user.save((err,doc)=>{
  if(err){
    console.log("写入数据库出错");
  }
  else console.log("写入成功");

})
