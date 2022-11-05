
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Cat} from '../cat.model'
import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'cat-display',
  templateUrl: './cat.component.html'
})

@Injectable({providedIn: 'root'})
export class DisplayCatComponent {
  constructor(private http: HttpClient){}
  activeCat : any = this.getCatbyUser();
  weatherInfo : any = "";
  isLoaded = false

  @Input() onCatDisplay: string = "";
  @Output() onGetCat = new EventEmitter<any> ();

  async getCatbyUser(){
    await this.onCatDisplay;
    this.http.get(`http://localhost:3000/user/${this.onCatDisplay}`, {responseType: 'json'})
        .subscribe((message)=>{
          console.log(message)
          if(message) {
            this.activeCat = message
            this.isLoaded = true;
            return message
        }
          else {
            return 'cat not found'
          }

        });
      }

  getCat(form : NgForm){

    this.http.get(`http://localhost:3000/find/${form.value.name}`, {responseType: 'json'})
        .subscribe((message)=>{
          if(message) {
            this.activeCat = message
            this.http.get(`    http://api.weatherapi.com/v1/current.json?key=909df6789cf44ffea9633859222204&q=${this.activeCat.location}&aqi=no
            `, {responseType: 'json'})

          } else {
            this.activeCat = 'cat not found'
          }
          console.log(this.activeCat)

        });
  }

  sendCat() {
    this.onGetCat.emit(this.activeCat)
  }



}

