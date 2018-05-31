import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostItemComponent } from './admin-post-item.component';

describe('AdminPostItemComponent', () => {
  let component: AdminPostItemComponent;
  let fixture: ComponentFixture<AdminPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
