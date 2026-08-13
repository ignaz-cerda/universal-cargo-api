import { Module } from '@nestjs/common';
import { LeadsModule } from './leds/leads.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LeadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
