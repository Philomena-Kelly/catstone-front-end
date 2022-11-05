import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-write-post-component',
  templateUrl: './write-post-component.component.html',
  styleUrls: ['./write-post-component.component.css']
})
export class WritePostComponentComponent implements OnInit {



  constructor(private http: HttpClient){}
  @Input() activeCat: any = "";
  @Input() owner: any = "";
  @Output() ifPosted = new EventEmitter<boolean> ();



    onAddPost(form : NgForm){
      const post ={
        message: form.value.message,
        sender: this.owner,
        owner: this.activeCat.owner,
        cat: this.activeCat.name
      };
      console.log(post)
      this.http.post<{message: string}>('http://localhost:3000/post',post)
          .subscribe((message)=>{
            console.log(message);
            this.http.patch<{message: string}>(`http://localhost:3000/treat/${this.activeCat.name}`,post)
            .subscribe((message)=>{
              console.log(message);
              form.resetForm();
              this.updatedPost()
            })
            form.resetForm();
          })

    }

  updatedPost() {
    this.ifPosted.emit(!this.ifPosted)
  }

  ngOnInit(): void {
  }

}
