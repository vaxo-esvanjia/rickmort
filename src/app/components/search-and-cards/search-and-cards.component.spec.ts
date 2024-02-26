import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndCardsComponent } from './search-and-cards.component';

describe('SearchAndCardsComponent', () => {
  let component: SearchAndCardsComponent;
  let fixture: ComponentFixture<SearchAndCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
