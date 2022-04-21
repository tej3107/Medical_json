var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

var data = [], perc = [], ab = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index.ejs");
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/signin',(req,res)=>{
    res.render('signin');
})

app.get('/symptoms',(req,res)=>{
    res.render('sympt');
})

app.get('/breastcancer',(req,res)=>{
    res.render('breastcan.ejs');
})

app.post("/results",(req,res)=>{
    data=[];perc=[];ab=[];
    // console.log(req.body);
    data.push(req.body.a);perc.push(req.body.a1);
    data.push(req.body.b);perc.push(req.body.b1);
    data.push(req.body.c);perc.push(req.body.c1);
    data.push(req.body.d);perc.push(req.body.d1);
    data.push(req.body.e);perc.push(req.body.e1);
    ab.push(req.body.f1);ab.push(req.body.f2);

    // data2 = req.body.new;
    // console.log(data2);

    console.log(data, 'data');
    console.log(perc,'perc');
    console.log(ab,'ab');

    // console.log(name,age,email,sex,hgt,wgt,temp,dob,smoke,alcohol,physc,bmi);
    // console.log(ubp,lbp,gul,chol);

    res.redirect('/results');
})

app.get('/results',(req,res)=>{
    res.render('result',{result:data,perc:perc,ab:ab});
})

app.listen(process.env.PORT||3000,()=>{
    console.log('server started');
})