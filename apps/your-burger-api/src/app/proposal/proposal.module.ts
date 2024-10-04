import { Module } from '@nestjs/common';
import { ProposalService } from './domain/proposal.service';
import { ProposalController } from './infra/http/proposal.controller';

@Module({
  controllers: [ProposalController],
  providers: [{ provide: ProposalService, useClass: ProposalService as any }],
})
export class ProposalModule {}
