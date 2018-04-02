import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDynamicFormComponent } from './advanced-dynamic-form.component';

describe('AdvancedDynamicFormComponent', () => {
  let component: AdvancedDynamicFormComponent;
  let fixture: ComponentFixture<AdvancedDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
