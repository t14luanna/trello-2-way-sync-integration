import { Module } from '@nestjs/common';
import { NotionController } from 'src/notion/notion.controller';
import { NotionService } from 'src/notion/notion.service';

@Module({
  controllers: [NotionController],
  providers: [NotionService],
  imports: [],
})
export class NotionModule {}
