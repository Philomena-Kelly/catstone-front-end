import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserNewUserCancelComponent } from './user-new-user-cancel.component';

describe('UserNewUserCancelComponent', () => {
  let component: UserNewUserCancelComponent;
  let fixture: ComponentFixture<UserNewUserCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNewUserCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNewUserCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
