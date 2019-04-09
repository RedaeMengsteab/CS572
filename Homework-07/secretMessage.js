const MongoClient=require('mongodb').MongoClient;
const express=require('express');
//const encryptor=require('simple-encryptor');
const client=new MongoClient("mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01");
//const client=new MongoClient("mongodb+srv://RedaeMengsteab:Redae2013@cluster0-kkphm.mongodb.net/homework07?retryWrites=true");



const app=express();

app.get('/secret',(req,res)=>{
    client.connect(function(err){
        const db=client.db('homework01');
        const collection=db.collection('data');
        
        collection.findOne({},function(err,doc){
            const encryptor=require('simple-encryptor')(doc.key);
            const decrypted_Message=encryptor.decrypt(doc.message);
            res.json(decrypted_Message);
            client.close();

        });
        console.log('done');

    });

    
})
app.listen(3000,()=>console.log("Server is running at the port 3000"));