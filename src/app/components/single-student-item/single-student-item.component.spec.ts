import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudentItemComponent } from './single-student-item.component';

describe('SingleStudentItemComponent', () => {
  let component: SingleStudentItemComponent;
  let fixture: ComponentFixture<SingleStudentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStudentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStudentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
