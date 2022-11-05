import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateCatComponent } from 'src/app/cat/create-cat/create-cat.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css',],

})
export class UserLoginComponent implements OnInit {


  constructor() { }
  logIn : boolean = false
  register : boolean = false


  @Output() onLogIn = new EventEmitter<boolean> ();
  @Output() onRegister = new EventEmitter<boolean> ();
  @Output() onUserName = new EventEmitter<string> ();



  logInButton() {
    this.logIn = !this.logIn
  };

  registerButton() {
    this.register = !this.register
  };

  assignLogIn(form : NgForm) {
    this.onLogIn.emit(true);
    this.onUserName.emit(form.value.username)

  };

  assignNewUser(form : NgForm) {
    this.onRegister.emit(true)
    this.onUserName.emit(form.value.username)
  };

  ngOnInit(): void {
  };


}
