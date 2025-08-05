import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class ResumeService {
  constructor(private prisma: PrismaService) {}

  async create(createResumeDto: Prisma.ResumeCreateInput) {
    return this.prisma.resume.create({
      data: createResumeDto,
    });
  }

  async findAll() {
    return this.prisma.resume.findMany();
  }

  async findOne(id: number) {
    return this.prisma.resume.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateResumeDto: Prisma.ResumeUpdateInput) {
    return this.prisma.resume.update({
      where: {
        id,
      },
      data: updateResumeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.resume.delete({
      where: {
        id,
      },
    });
  }
}
