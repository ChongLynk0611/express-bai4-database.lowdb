var express = require("express");
var app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({  users: [] })
  .write()

var users  = [
    {id:1 , name: "Linh"},
    {id:2,name:"Hung"},
    {id:3,name:"Toan"}
]

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index',{
        users:db.get("users").value()
    });
});
app.get('/users/create' , (req ,res)=>{
    res.render("create");
})
app.post('/users/create' , (req, res)=>{
    db.get("users").push(req.body).write();
    res.redirect('/');

})
app.listen(3000 , function(){
    console.log("this is port:3000");
})
