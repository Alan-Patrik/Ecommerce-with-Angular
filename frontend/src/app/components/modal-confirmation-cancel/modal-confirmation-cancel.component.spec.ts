import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmationCancelComponent } from './modal-confirmation-cancel.component';

describe('ModalConfirmationCancelComponent', () => {
  let component: ModalConfirmationCancelComponent;
  let fixture: ComponentFixture<ModalConfirmationCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmationCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmationCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
