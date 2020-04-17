import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressTodoListComponent } from './in-progress-todo-list.component';

describe('InProgressTodoListComponent', () => {
  let component: InProgressTodoListComponent;
  let fixture: ComponentFixture<InProgressTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
