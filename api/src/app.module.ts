import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { AppRoutes } from 'src/app.route';
import configuration from 'src/config/configuration';
import { NotionModule } from 'src/notion/notion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    RouterModule.register(AppRoutes),
    NotionModule,
  ],
})
export class AppModule {}
