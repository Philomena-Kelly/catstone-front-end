import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-new-user-cancel',
  templateUrl: './user-new-user-cancel.component.html',
  styleUrls: ['./user-new-user-cancel.component.css']
})
export class UserNewUserCancelComponent implements OnInit {

  constructor() { }
  @Output() onAssignNewUser = new EventEmitter<boolean> ();


  ngOnInit(): void {
  }

  assignNewUser() {
    this.onAssignNewUser.emit(false)

  };

}

