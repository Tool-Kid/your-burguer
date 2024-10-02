import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChoicePickerComponent } from './simple-choice-picker.component';

describe('SimpleChoicePickerComponent', () => {
  let component: SimpleChoicePickerComponent;
  let fixture: ComponentFixture<SimpleChoicePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleChoicePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleChoicePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
