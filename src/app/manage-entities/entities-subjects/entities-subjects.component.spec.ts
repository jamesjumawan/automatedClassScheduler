import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesSubjectsComponent } from './entities-subjects.component';

describe('EntitiesSubjectsComponent', () => {
  let component: EntitiesSubjectsComponent;
  let fixture: ComponentFixture<EntitiesSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
