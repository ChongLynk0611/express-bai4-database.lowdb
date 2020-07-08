var express = require("express");
var app = express();

var users  = [
    {id:1 , name: "Linh"},
    {id:2,name:"Hung"},
    {id:3,name:"Toan"}
]

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(3000 , function(){
    console.log("this is port:3000");
})
