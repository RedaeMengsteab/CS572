const http=require('http');
const fs=require('fs');
const path=require('path');
http.createServer(function(req,res){
    fs.createReadStream(path.join(__dirname,'baptism.mpg')).pipe(res);
4
}).listen(2000,()=>console.log('Server is listening to port 2000'));
http.createServer(function(req,res){
    fs.readFile(path.join(__dirname,'baptism.mpg'),function(err,data){
        if(err) throw err;
        res.end(data);
    })
}).listen(4000,()=>console.log('Server is listening to 4000'));
http.createServer(function(req,res){
   const html= fs.readFileSync(path.join(__dirname,'baptism.mpg'));
        res.end(html);
        
    }).listen(6000,()=>console.log('Server is listening to 6000'));
