import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurgerProposalPageComponent } from './burger-proposal.page.component';

describe('BurgerProposalPageComponent', () => {
  let component: BurgerProposalPageComponent;
  let fixture: ComponentFixture<BurgerProposalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerProposalPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerProposalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
