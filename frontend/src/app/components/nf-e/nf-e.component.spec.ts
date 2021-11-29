import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFEComponent } from './nf-e.component';

describe('NFEComponent', () => {
  let component: NFEComponent;
  let fixture: ComponentFixture<NFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
