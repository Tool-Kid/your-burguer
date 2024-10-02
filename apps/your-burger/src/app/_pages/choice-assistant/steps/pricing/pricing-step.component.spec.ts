import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingStepComponent } from './pricing-step.component';

describe('PricingStepComponent', () => {
  let component: PricingStepComponent;
  let fixture: ComponentFixture<PricingStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
