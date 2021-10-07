import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesSemestersComponent } from './entities-semesters.component';

describe('EntitiesSemestersComponent', () => {
  let component: EntitiesSemestersComponent;
  let fixture: ComponentFixture<EntitiesSemestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesSemestersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesSemestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
