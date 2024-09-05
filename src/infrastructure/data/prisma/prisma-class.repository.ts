import { ClassEntity, ClassRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaClassRepository implements ClassRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ClassEntity): Promise<ClassEntity> {
    return this.prisma.class.create({ data });
  }

  async findAll(filter?: Partial<ClassEntity>): Promise<ClassEntity[]> {
    return this.prisma.class.findMany({ where: filter });
  }

  async findOne(id: string): Promise<ClassEntity> {
    return this.prisma.class.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<ClassEntity>): Promise<ClassEntity> {
    return this.prisma.class.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.class.delete({ where: { id } });
  }
}
