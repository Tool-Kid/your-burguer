import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Proposal } from '../../domain/proposal';
import { ProposalService } from '../../domain/proposal.service';
import { CustomerPreferencesDto } from './customer-preferences.dto';
import { API_TAGS } from '../../../../open-api';

@Controller('proposal')
@ApiTags(API_TAGS.PROPOSAL)
export class ProposalController {
  constructor(private readonly proposalService: ProposalService) {}

  @Post()
  computeProposal(preferences: CustomerPreferencesDto): Proposal {
    return { burguers: [] };
  }
}
