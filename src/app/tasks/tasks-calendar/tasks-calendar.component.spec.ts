import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCalendarComponent } from './tasks-calendar.component';

describe('TasksCalendarComponent', () => {
  let component: TasksCalendarComponent;
  let fixture: ComponentFixture<TasksCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
