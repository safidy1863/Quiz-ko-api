/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestEntity, TestsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaTestsRepository implements TestsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: TestEntity): Promise<TestEntity> {
    return this.prisma.test.create({ data });
  }

  findAll(filter?: Partial<TestEntity>): Promise<TestEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<TestEntity> {
    return this.prisma.test.findUnique({ where: { id } });
  }
  update(id: string, data: Partial<TestEntity>): Promise<TestEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
