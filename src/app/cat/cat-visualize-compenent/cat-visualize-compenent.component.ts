
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Cat} from '../cat.model'
import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-cat-visualize-compenent',
  templateUrl: './cat-visualize-compenent.component.html',
  styleUrls: ['./cat-visualize-compenent.component.css'],
})
export class CatVisualizeCompenentComponent implements OnInit {

  constructor() { }
  @Input() activeCat: any = "";
  @Input() posted : boolean = false;


  ngOnInit(): void {
  }

}
