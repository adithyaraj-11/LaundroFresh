const express=require("express");;;
const history=express();

const bodyParser=require("body-parser");;
history.use(bodyParser.json());
history.use(bodyParser.urlencoded({extended:true}));;

history.set('view engine','ejs');
history.set('views','./views/history');

history.get('\history',function(req,res){
    res.render('history');
});
module.exports=history;