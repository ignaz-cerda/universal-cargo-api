import { Module } from '@nestjs/common';
import { LeadsModule } from './leds/leads.module';

@Module({
  imports: [LeadsModule],
})
export class AppModule {}
