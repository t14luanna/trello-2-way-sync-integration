import { Controller, Get } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';

@Controller('notion')
export class NotionController {
  constructor(private notionService: NotionService) {}

  @Get('test')
  async test() {
    return await this.notionService.test();
  }
}
