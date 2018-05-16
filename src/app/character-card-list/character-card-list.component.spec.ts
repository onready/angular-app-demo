import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardListComponent } from './character-card-list.component';

describe('CharacterCardListComponent', () => {
  let component: CharacterCardListComponent;
  let fixture: ComponentFixture<CharacterCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
