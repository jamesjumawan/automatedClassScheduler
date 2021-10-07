import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesCollegesComponent } from './entities-colleges.component';

describe('EntitiesCollegesComponent', () => {
  let component: EntitiesCollegesComponent;
  let fixture: ComponentFixture<EntitiesCollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesCollegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
