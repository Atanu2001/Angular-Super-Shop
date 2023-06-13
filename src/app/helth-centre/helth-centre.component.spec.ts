import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelthCentreComponent } from './helth-centre.component';

describe('HelthCentreComponent', () => {
  let component: HelthCentreComponent;
  let fixture: ComponentFixture<HelthCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelthCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelthCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
