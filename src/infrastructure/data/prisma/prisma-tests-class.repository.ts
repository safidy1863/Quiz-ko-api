/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestClassEntity, TestsClassRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaTestsClassRepository implements TestsClassRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: TestClassEntity): Promise<TestClassEntity> {
    return this.prisma.testsClass.create({ data });
  }

  findAll(filter?: Partial<TestClassEntity>): Promise<TestClassEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: string): Promise<TestClassEntity> {
    throw new Error('Method not implemented.');
  }

  async findByClassId(classId: string): Promise<TestClassEntity[]> {
    return this.prisma.testsClass.findMany({ where: { classId } });
  }

  update(id: string, data: Partial<TestClassEntity>): Promise<TestClassEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
