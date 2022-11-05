import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatVisualizeCompenentComponent } from './cat-visualize-compenent.component';

describe('CatVisualizeCompenentComponent', () => {
  let component: CatVisualizeCompenentComponent;
  let fixture: ComponentFixture<CatVisualizeCompenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatVisualizeCompenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatVisualizeCompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
