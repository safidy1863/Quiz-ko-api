import { LevelEntity, LevelsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaLevelsRepository implements LevelsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: LevelEntity): Promise<LevelEntity> {
    return this.prisma.level.create({ data });
  }

  async findAll(filter?: Partial<LevelEntity>): Promise<LevelEntity[]> {
    return this.prisma.level.findMany({ where: filter });
  }

  async findOne(id: string): Promise<LevelEntity> {
    return this.prisma.level.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<LevelEntity>): Promise<LevelEntity> {
    return this.prisma.level.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.level.delete({ where: { id } });
  }
}
