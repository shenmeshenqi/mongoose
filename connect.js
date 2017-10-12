var mongoose=require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/db_helloworld");
db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
  console.log("数据库连接成功");
});
/*// 3、通过`mongoose.model`定义模型(model)
var Cat = mongoose.model('Cat', { name: String });

// 4、通过`new`关键字实例化Cat模型，参数是`{ name: 'Zildjian' }`，创建kitty对象
var kitty = new Cat({ name: 'Zildjian' });

// 5、执行`kitty.save`来保存到数据库
kitty.save(function (err) {
  if (err) {
    console.log('save error:' + err);
  }

  console.log('save sucess');
});*/
