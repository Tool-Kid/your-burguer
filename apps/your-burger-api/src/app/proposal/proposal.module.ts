import { Module } from '@nestjs/common';
import { ProposalService } from './domain/proposal.service';

@Module({
  providers: [{ provide: ProposalService, useClass: ProposalService as any }],
})
export class ProposalModule {}
