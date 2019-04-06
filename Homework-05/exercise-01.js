const express=require('express');
const axios=require('axios');
const app=express();
const port=2000;
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('x-powered-by',false);
app.get('/users',async (req,res)=>{
    res.set({'Cache-Control':'private, max-age=86400',
    'Last-Modified':Date.now});
    res.links({
        next:'http://localhost:2000/users?page=1',
        last:'http://localhost:2000/users?page=2'
    });
    try{
        const user=await axios.get('https://randomuser.me/api/?results=10');
        console.log(user);
        console.log(user.data);
        res.json(user.data);
    }
    catch(e){
        console.log(e);
    }
})
app.listen(port,()=>{console.log(`Serve is listening on port ${port}`)});