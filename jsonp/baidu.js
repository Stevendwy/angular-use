var express = require("express");
var app = express();

app.get("/jsonp",function(req,res){
    var query = req.query;
    var name = query.name;
    var age = query.age;
    var cb = query.cb;

    var obj = {
        name:"您 的 名字 为:"+name,
        age:"您 的 年龄是:"+age
    };
    /*
     * 执行 jsonp 回调方法,此方法传进去一个 字符串参数
     *
     * */
    var strJson = JSON.stringify(obj);
    res.send(cb+'('+strJson+')');
});
app.get("*",function(req,res){
    //var query = req.query;
    var reg = /\.[a-z]+$/;
    if(reg.test(req.path)){
        var path = __dirname+req.path;
        res.sendFile(path);
    };
});
app.listen(8080);

