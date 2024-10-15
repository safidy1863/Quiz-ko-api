/* eslint-disable @typescript-eslint/no-unused-vars */
import { ResultEntity, ResultsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaResultsRepository implements ResultsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ResultEntity): Promise<ResultEntity> {
    return this.prisma.result.create({ data });
  }
  findAll(filter?: Partial<ResultEntity>): Promise<ResultEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<ResultEntity> {
    throw new Error('Method not implemented.');
  }

  async findByStudentId(studentId: string): Promise<ResultEntity[]> {
    return this.prisma.result.findMany({ where: { studentId } });
  }

  async findByStudentIdAndTestId(
    studentId: string,
    testId: string,
  ): Promise<ResultEntity> {
    return this.prisma.result.findFirst({ where: { testId, studentId } });
  }

  async update(id: string, data: Partial<ResultEntity>): Promise<ResultEntity> {
    return this.prisma.result.update({ where: { id }, data });
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
