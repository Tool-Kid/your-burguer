import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurguerProposalPageComponent } from './burguer-proposal.page.component';

describe('BurguerProposalPageComponent', () => {
  let component: BurguerProposalPageComponent;
  let fixture: ComponentFixture<BurguerProposalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurguerProposalPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BurguerProposalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
