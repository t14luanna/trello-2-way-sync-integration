import { Client } from '@notionhq/client';

export class NotionService {
  async test() {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const list = await notion.users.list({});
    return list;
  }
}
