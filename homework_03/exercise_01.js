const {Resolver}=require('dns').promises;
const resolver=new Resolver();
resolver.resolve4('www.mum.edu').then ((addresses)=>
{
    console.log(addresses);
}
);
// Another way of write using Async and await
(async function(){
    const addresses=await resolver.resolve4('www.mum.edu');
    console.log(addresses);
})();