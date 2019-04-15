class University{
    constructor(public name:string, public depatment:string){}
    graduation (year:number){
        console.log(`Graduating ${this.depatment} ${year} students`);
    }
}
let mum=new University("MUM","Masters of Computer Science");
mum.graduation(2019);