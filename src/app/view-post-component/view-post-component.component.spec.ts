import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostComponentComponent } from './view-post-component.component';

describe('ViewPostComponentComponent', () => {
  let component: ViewPostComponentComponent;
  let fixture: ComponentFixture<ViewPostComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
