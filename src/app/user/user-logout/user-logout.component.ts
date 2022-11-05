import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor() { }
  @Output() emitData = new EventEmitter<boolean> ();
  @Output() onRegister = new EventEmitter<boolean> ();



  ngOnInit(): void {
  }

  logOut() {
    this.emitData.emit(false);
  }
  assignNewUser() {
    this.onRegister.emit(false)

  };

}
