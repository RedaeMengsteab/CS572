const MongoClient=require('mongodb').MongoClient;
const client=new MongoClient('mongodb://localhost:27017',{useNewUrlParser:true});
const dbName="restaurants";
const collectionName="redae";
client.connect((error)=>{
    Queries();
    
})
function Queries(){
    const db=client.db(dbName);
    const collection=db.collection(collectionName);
    

collection.find({"address.coord.1":{$gt:42,$lt:52}}).project({restaurant_id:1,name:1,"address.coord":1}).each((err,data)=>{
          
        
         console.log(data);
         client.close();
     })
    }

    
