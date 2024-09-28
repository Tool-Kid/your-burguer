import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurguerTypeStepComponent } from './burguer-type-step.component';

describe('BurguerTypeStepComponent', () => {
  let component: BurguerTypeStepComponent;
  let fixture: ComponentFixture<BurguerTypeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurguerTypeStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BurguerTypeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
