import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadewithComponent } from './madewith.component';

describe('MadewithComponent', () => {
  let component: MadewithComponent;
  let fixture: ComponentFixture<MadewithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadewithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadewithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
