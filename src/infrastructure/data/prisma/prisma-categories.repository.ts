import { CategoryEntity, CategoriesRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaCategoriesRepository implements CategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CategoryEntity): Promise<CategoryEntity> {
    return this.prisma.category.create({ data });
  }

  async findAll(filter?: Partial<CategoryEntity>): Promise<CategoryEntity[]> {
    return this.prisma.category.findMany({ where: filter });
  }

  async findOne(id: string): Promise<CategoryEntity> {
    return this.prisma.category.findUnique({where : {id}})
  }

  async update(id: string, data: Partial<CategoryEntity>): Promise<CategoryEntity> {
    return this.prisma.category.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.category.delete({ where: { id } });
  }
}
