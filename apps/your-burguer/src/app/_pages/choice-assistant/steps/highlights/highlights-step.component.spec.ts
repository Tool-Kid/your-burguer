import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightsStepComponent } from './highlights-step.component';

describe('HighlightsStepComponent', () => {
  let component: HighlightsStepComponent;
  let fixture: ComponentFixture<HighlightsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
