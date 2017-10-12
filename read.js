require('./connect');

// 2、引入`User` Model
var User = require('./user');
User.find({},(err,docs)=>
{
  if(err)console.log(出错);
  else{
    console.log(docs);
  }
})
User.findOne({username:'朱子恒'},(err,docs)=>{
  if(err)console.log("查找失败");
  else {

  console.log("查找成功");
  console.log(docs.password);}
})
