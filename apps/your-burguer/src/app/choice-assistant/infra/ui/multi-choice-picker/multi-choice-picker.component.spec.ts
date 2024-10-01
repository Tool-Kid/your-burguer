import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiChoicePickerComponent } from './multi-choice-picker.component';

describe('SimpleChoicePickerComponent', () => {
  let component: MultiChoicePickerComponent;
  let fixture: ComponentFixture<MultiChoicePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiChoicePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiChoicePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
