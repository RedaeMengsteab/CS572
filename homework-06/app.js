const express=require('express');
const path=require('path');
const fs=require('fs');
const morgan=require('morgan');
const cors=require('cors');

const app=express();
app.use(express.json());
const port=process.env.Port || 3000;
const grades=[
    {id:1,name:'Assad Saad',course:'CS572',grade:95},
    {id:2,name:'Redae Mengsteab',course:'CS572',grade:97},
    {id:3,name:'Lidia Dawit',course:'CS572',grade:100},
    {id:4,name:'Senay Redae',course:'CS572',grade:100},
    {id:5,name:'Sofia ',course:'CS572',grade:100} ];

  app.use(express.json());
  app.use(express.urlencoded({extended:false})); 
  const accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'}) 
  app.use(morgan('combined',{stream:accessLogStream})) 
  app.use(cors());
  app.use(function(req,res,next){
      if(req.get('Content-Type')!=='application/json')
      {
          console.log('your request is not json');
      }
      else{
          next();
      }
  });              
app.get('/',(req,res)=>{
    res.send('Hello World to Express.js');
    //res.json({name:'Redae',course:'CS572',year:2019});
    //res.json([{name:'Redae'},{name:'Lidia'},{name:'Senay'}]); 
     });
app.get('/grades/:id/:name/:course/:grade',(req,res)=>{
    res.send(req.params); 
    });
app.get('/grades',(req,res)=>{
    res.json(grades);
    });
    app.get('/grades/:id',(req,res)=>{
    const grade=grades.find(g=>g.id===parseInt(req.params.id));
    if(!grade)res.status(404).send("The grade with the given ID is not found");
    res.send(grade);
    });
    app.post('/grades',(req,res)=>{
        const grade={
            id:grades.length+1,
            name:req.body.name,
            course:req.body.course,
            grade: req.body.grade
        };
        grades.push(grade);
        res.send(grade);
    });
    app.put('/grades/:id',(req,res)=>{
        const grade=grades.find(g=>g.id===parseInt(req.params.id));
        if(!grade)res.status(404).send("The grade with the given ID is not found");
        grade.name=req.body.name;
        res.send(grade);
        });
    app.delete('/grades/:id',(req,res)=>{
        const grade=grades.find(g=>g.id===parseInt(req.params.id));
        if(!grade)res.status(404).send("The grade with the given ID is not found");
        const index=grades.indexOf(grade);
        grades.splice(index,1);
        res.send(grade);

    })



app.listen(port,()=>
    console.log(`Server is running though port ${port}`)
);
