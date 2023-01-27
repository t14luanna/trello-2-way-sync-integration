import { Routes } from '@nestjs/core';
import { NotionModule } from 'src/notion/notion.module';

export const AppRoutes: Routes = [
  {
    path: 'notion',
    module: NotionModule,
  },
];
