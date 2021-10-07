import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesRoomsComponent } from './entities-rooms.component';

describe('EntitiesRoomsComponent', () => {
  let component: EntitiesRoomsComponent;
  let fixture: ComponentFixture<EntitiesRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
