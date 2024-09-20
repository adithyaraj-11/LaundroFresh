const express=require("express");;;
const dashboard=express();

const bodyParser=require("body-parser");;
dashboard.use(bodyParser.json());
dashboard.use(bodyParser.urlencoded({extended:true}));;

dashboard.set('view engine','ejs');
dashboard.set('views','./views/dashboard');

dashboard.get('\dashboard',function(req,res){
    res.render('dashboard');
});
module.exports=dashboard;