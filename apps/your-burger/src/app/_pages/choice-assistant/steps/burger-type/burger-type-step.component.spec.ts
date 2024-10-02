import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurgerTypeStepComponent } from './burger-type-step.component';

describe('BurgerTypeStepComponent', () => {
  let component: BurgerTypeStepComponent;
  let fixture: ComponentFixture<BurgerTypeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerTypeStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerTypeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
