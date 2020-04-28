import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsItemComponent } from './all-students-item.component';

describe('AllStudentsItemComponent', () => {
  let component: AllStudentsItemComponent;
  let fixture: ComponentFixture<AllStudentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudentsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
