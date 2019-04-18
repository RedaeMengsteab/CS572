import { UserService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private subscription:Subscription;
  uuid:string;
  user:any;

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { 
    this.subscription=activatedRoute.params.subscribe(
      (param:any )=>this.uuid=param['uuid']
    );
  }

  ngOnInit() {
    this.user=this.userService.getUserByUuid(this.uuid);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
