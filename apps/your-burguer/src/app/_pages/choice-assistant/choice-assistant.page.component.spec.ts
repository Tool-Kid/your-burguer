import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceAssistantPageComponent } from './choice-assistant.page.component';

describe('ChoiceAssistantPageComponent', () => {
  let component: ChoiceAssistantPageComponent;
  let fixture: ComponentFixture<ChoiceAssistantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceAssistantPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceAssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
