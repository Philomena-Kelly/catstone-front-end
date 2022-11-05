import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-post-component',
  templateUrl: './view-post-component.component.html',
  styleUrls: ['./view-post-component.component.css']
})
export class ViewPostComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  posts : any = []
  postList : any = []
  @Input() activeCat: any = "";
  @Input() posted: any = "";


  ngOnInit(){
    this.getPosts();
  }

  ngOnChanges() {
    this.getPosts();
  }

  getPosts(){
    this.http.get<{message: any}>(`http://localhost:3000/posts/${this.activeCat.owner}`)
    .subscribe((message)=>{
        this.posts = message
        console.log('hullo')
        this.posts = this.posts.data
        this.postList = [...this.posts]
        this.postList = this.postList.reverse()
        console.log(this.postList)
    });
  }

}
