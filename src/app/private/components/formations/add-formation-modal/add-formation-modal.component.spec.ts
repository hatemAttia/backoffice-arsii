import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationModalComponent } from './add-formation-modal.component';

describe('AddFormationModalComponent', () => {
  let component: AddFormationModalComponent;
  let fixture: ComponentFixture<AddFormationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
