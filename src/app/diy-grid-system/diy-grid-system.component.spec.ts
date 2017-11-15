import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyGridSystemComponent } from './diy-grid-system.component';

describe('DiyGridSystemComponent', () => {
  let component: DiyGridSystemComponent;
  let fixture: ComponentFixture<DiyGridSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyGridSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyGridSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
