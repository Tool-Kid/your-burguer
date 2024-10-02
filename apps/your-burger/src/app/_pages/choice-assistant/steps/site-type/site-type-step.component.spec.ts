import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteTypeStepComponent } from './site-type-step.component';

describe('SiteTypeStepComponent', () => {
  let component: SiteTypeStepComponent;
  let fixture: ComponentFixture<SiteTypeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteTypeStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteTypeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
