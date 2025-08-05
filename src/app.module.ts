import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ResumeModule],
})
export class AppModule {}
