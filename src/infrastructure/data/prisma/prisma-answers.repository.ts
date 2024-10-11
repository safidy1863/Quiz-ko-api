import { AnswersRepository, AnswerEntity } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaAnswersRepository implements AnswersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: AnswerEntity): Promise<AnswerEntity> {
    return this.prisma.answer.create({ data });
  }
  findAll(filter?: Partial<AnswerEntity>): Promise<AnswerEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<AnswerEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<AnswerEntity>): Promise<AnswerEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
