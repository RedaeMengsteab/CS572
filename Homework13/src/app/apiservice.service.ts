import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="https://randomuser.me/api/?results=10";
  private dataKey='dataKey';

  constructor(private http:HttpClient) { 

    //this.getOnlineData();
  }

getOnlineData(){
  //this.http.get(this.url).subscribe((data:{results:[]})=>{console.log(data.results)})
  // saving the data to localStorage
  this.http.get(this.url).subscribe((data:{results:[]})=>{
    localStorage.setItem(this.dataKey,JSON.stringify(data.results));
  });
}
getCachedData(){
  return JSON.parse(localStorage.getItem(this.dataKey));

}
getUserByUuid(uuid:string){
  const users=this.getCachedData();
  const user=users.find(user=>user.login.uuid==uuid);
  return user;
}

}
