const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;
const express=require('express');
//const lecture=require('/lecture');
const client=new MongoClient('mongodb+srv://RedaeMengsteab:Redae2013@cluster0-kkphm.mongodb.net/homework07?retryWrites=true');
const app=express();
app.use(express.json());
app.use((req,res,next)=>{
    client.connect((err)=>{
        if(err) throw err;
        const db=client.db('homework07');
        const collection=db.collection('lectures');
        req.collection=collection;
        next();

    });
});
app.post('/lectures',(req,res)=>{
    const newCourse={
        course:req.body.course,
        lecture:req.body.lecture
    };
    req.collection.insertOne(newCourse);
    res.json(newCourse);

})
app.get('/lectures/:course',(req,res)=>{
    const course=req.params.course;
    req.collection.findOne({course:course},function(err,doc){
        res.json(doc);
    })
})
app.get('/lectures',(req,res)=>{
    const cursor=req.collection.find({}).project({_id:0});
    cursor.limit(4).toArray(function(err,doc){
        res.json(doc);
    })
})
app.delete('/lectures/:course',(req,res)=>{
    const course=req.params.course;
    res.json(req.collection.findOne({course:course}))
    req.collection.deleteOne({course:course},function(err,doc){
        if(err) throw err;
        //res.json(doc);
    })
})
app.put('/lectures/:id',(req,res)=>{
    const myquery={_id:new ObjectID(req.params.id)};
    const course=req.body.course;
    const lecture=req.body.lecture;
    req.collection.updateOne(myquery,{$set:{course:course, lecture:lecture}},{upsert:true},function(err,doc){
        if(err) throw err;
        console.log(doc);
        
        res.json(doc);
    })
    
    
})
app.post('/search/:q',(req,res)=>{
    const cursor=req.collection.find({lecture:req.params.q})
    cursor.toArray(function(err,docs){
        res.json(docs);
    })
})
app.listen(3000,()=>console.log("Server is running at port 4000"));
