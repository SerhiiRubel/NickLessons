import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentsItemComponent } from './admin-comments-item.component';

describe('AdminCommentsItemComponent', () => {
  let component: AdminCommentsItemComponent;
  let fixture: ComponentFixture<AdminCommentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommentsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
