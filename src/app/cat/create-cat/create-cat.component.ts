import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Cat} from '../cat.model'
import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'create-cat',
  templateUrl: './create-cat.component.html'
})

@Injectable({providedIn: 'root'})
export class CreateCatComponent {

  @Output() onCreateCat = new EventEmitter<boolean> ();
  @Output() onCreateCatLogin = new EventEmitter<boolean> ();

  

  constructor(private http: HttpClient){}
    success : string = "";
    validCat : any = true;

    onAddCat(form : NgForm){
      const cat ={
        name: form.value.name,
        location: form.value.location, 
        color: form.value.color, 
        owner: form.value.owner,
        treat_count: 1
      };
      console.log(cat)
      this.http.post<{message: string}>('http://localhost:3000/cat',cat)
          .subscribe((message)=>{
            console.log(message);
            this.onCreateCat.emit(false)
            this.onCreateCatLogin.emit(true)
            form.resetForm();
          });
      this.success = "yay!"


    }

    validateCat(cat : any) {
      this.http.get<{message: boolean}>(`http://localhost:3000/validate/${cat}`)
      .subscribe((message)=>{
        this.validCat = message;
        console.log(this.validCat)
        // catForm.name.invalid()
        return message
      });
      
    }
}

