import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from './entities/lead.entity';
import { CreateLeadResponseDto } from './dto/create-lead.response.dto';

@Injectable()
export class LeadsService {
  private readonly leads: Lead[] = [];

  create(createLeadDto: CreateLeadDto): CreateLeadResponseDto {
    const lead: Lead = {
      id: randomUUID(),
      ...createLeadDto,
      createdAt: new Date(),
    };

    this.leads.push(lead);

    return {
      status: 'ok',
      id: lead.id,
      receivedAt: lead.createdAt.toISOString(),
    };
  }

  findAll(): Lead[] {
    return this.leads;
  }
}
