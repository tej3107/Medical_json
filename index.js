var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(process.env.PORT||3000,()=>{
    console.log('server started');
})