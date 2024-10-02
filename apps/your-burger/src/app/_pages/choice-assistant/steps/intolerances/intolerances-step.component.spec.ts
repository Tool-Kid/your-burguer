import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntolerancesStepComponent } from './intolerances-step.component';

describe('IntolerancesStepComponent', () => {
  let component: IntolerancesStepComponent;
  let fixture: ComponentFixture<IntolerancesStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntolerancesStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntolerancesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
