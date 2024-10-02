import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GarnishStepComponent } from './garnish-step.component';

describe('GarnishStepComponent', () => {
  let component: GarnishStepComponent;
  let fixture: ComponentFixture<GarnishStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarnishStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GarnishStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
