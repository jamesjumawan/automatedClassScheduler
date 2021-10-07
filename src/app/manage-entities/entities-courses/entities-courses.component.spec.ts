import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesCoursesComponent } from './entities-courses.component';

describe('EntitiesCoursesComponent', () => {
  let component: EntitiesCoursesComponent;
  let fixture: ComponentFixture<EntitiesCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
