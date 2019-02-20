import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1C1Component } from './module1-c1.component';

describe('Module1C1Component', () => {
  let component: Module1C1Component;
  let fixture: ComponentFixture<Module1C1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1C1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
