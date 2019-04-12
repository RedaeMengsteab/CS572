const MongoClient=require('mongodb').MongoClient;
const client=new MongoClient('mongodb://localhost:27017',{useNewUrlParser:true});
const dbName="zips";
const collectionName="zipcode";
client.connect((error)=>{
    Queries();
    
})
function Queries(){
    const db=client.db(dbName);
    const collection=db.collection(collectionName);
    // number 1
    /*const cursor=collection.aggregate([
        {$match:{state:"WA"}},
        {$group:{_id:{'ZIP':"$_id",state:"$state"}}} ])*/

     //number 2   
     /*const cursor=collection.aggregate([
        {$group:{_id:"$city",
         num_of_ZipCodes:{$sum:1}
    
    }}
         ])*/
         const cursor=collection.aggregate([
            {$group:{_id:{city:"$city",state:"$state"},zip_codes:{$addToSet:"$_id"}}},
          {$match:
          {$nor: [
              {zip_codes: {$exists: false}},
              {zip_codes: {$size: 0}},
              {zip_codes: {$size: 1}}
          ]}},
          {$sort:{state:1,city:1}},
          
          ])







         const cursor=collection.aggregate([
            {$group:{_id:{state:"$state",city:"$city"},
            population:{$sum:"$pop"}}
        },
        {$sort:{"_id.state":1,"population":1}},
        {$group:{_id:"$_id.state",
            city:{$first:"$_id.city"},
            population:{$first:"$population"}}},
            {$sort:{"_id":1}}, 
            //{$limit:1}
         
             ])



    cursor.toArray((err,data)=>{
          
        
         console.log(data);
         client.close();
     });

    }
