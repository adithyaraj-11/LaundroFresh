const express=require("express");;;
const order=express();

const bodyParser=require("body-parser");;
order.use(bodyParser.json());
order.use(bodyParser.urlencoded({extended:true}));;

order.set('view engine','ejs');
order.set('views','./views/order');

order.get('\order',function(req,res){
    res.render('order');
});
module.exports=order;