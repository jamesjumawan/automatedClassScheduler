import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesUsersComponent } from './entities-users.component';

describe('EntitiesUsersComponent', () => {
  let component: EntitiesUsersComponent;
  let fixture: ComponentFixture<EntitiesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
