/* eslint-disable @typescript-eslint/no-unused-vars */
import { ResultEntity, ResultsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaResultsRepository implements ResultsRepository {
  constructor(private prisma: PrismaService) {}

  create(data: ResultEntity): Promise<ResultEntity> {
    throw new Error('Method not implemented.');
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

  update(id: string, data: Partial<ResultEntity>): Promise<ResultEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
