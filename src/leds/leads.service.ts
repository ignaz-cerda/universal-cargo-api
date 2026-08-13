import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  private readonly leads: Lead[] = [];

  create(createLeadDto: CreateLeadDto): Lead {
    const lead: Lead = {
      id: randomUUID(),
      ...createLeadDto,
      createdAt: new Date(),
    };

    this.leads.push(lead);

    return lead;
  }

  findAll(): Lead[] {
    return this.leads;
  }
}
