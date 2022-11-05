import { Component, Input, ViewChild, AfterViewInit  } from '@angular/core';
import {Cat} from './cat/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'we gettin started';
  loggedIn: boolean = false;
  newUser: boolean = false;
  currentUser: string = "";
  activeCat : any = ""
  currentCat : boolean = (this.currentUser === this.activeCat.owner)
  posted : boolean = false

  constructor() { }

  loggedInInfo(info:any) {
    this.loggedIn = info;
  }

  ifPosted(info:any) {
    this.posted = !this.posted
    console.log(this.posted)
  }

  newUserInfo(info:any){
    this.newUser = info;
  }

  currentUserName(info:any){
    this.currentUser = info;
  }

  updateCat(info:any) {
    this.activeCat = info
  }
}
