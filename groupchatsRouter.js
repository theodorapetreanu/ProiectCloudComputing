const express=require('express');
const router=express.Router();
const connection = require('./database');

router.get('/',(req,res) => {
    connection.query("SELECT * FROM GROUPCHATS", (err,results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }

        return res.json({
            contacts:results,
        })

    })

});

router.post('/',(req,res) => {
    console.log(req.body);
    return res.send("it works");
});

module.exports=router;