import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormNewComponent } from './complex-form-new.component';

describe('ComplexFormNewComponent', () => {
  let component: ComplexFormNewComponent;
  let fixture: ComponentFixture<ComplexFormNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexFormNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
