/* eslint-disable @typescript-eslint/no-unused-vars */
import { StudentTestAnswerEntity, StudentTestAnswerRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaStudentTestAnswerRepository
  implements StudentTestAnswerRepository
{
  constructor(private prisma: PrismaService) {}

  async create(
    data: StudentTestAnswerEntity,
  ): Promise<StudentTestAnswerEntity> {
    return this.prisma.studentTestAnswer.create({ data });
  }
  findAll(
    filter?: Partial<StudentTestAnswerEntity>,
  ): Promise<StudentTestAnswerEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<StudentTestAnswerEntity> {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    data: Partial<StudentTestAnswerEntity>,
  ): Promise<StudentTestAnswerEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
