import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesEmployeesComponent } from './entities-employees.component';

describe('EntitiesEmployeesComponent', () => {
  let component: EntitiesEmployeesComponent;
  let fixture: ComponentFixture<EntitiesEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
