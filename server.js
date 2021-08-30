const express = require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());

app.post('/login',function(req,res){
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username=req.body.username;
    const password=req.body.password;
    
    // This should come from the database
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if(username===mockUsername && password ===mockPassword){
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        });
    }else{
        res.json({
            sucess:false,
            message: 'password and username do not match'
        })
    }
});
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
];
app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});
app.get('/comment',function(req,res){
    res.send('Este es un mensaje del desarrollador al usuario');
})
// colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
    console.log(req.params.id);
    res.json({
        success: true,
        message:'got one user',
        user: req.params.id
    });
});

app.listen(8000,function(){
    console.log(("server is running"));
})