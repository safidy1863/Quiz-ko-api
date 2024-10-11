import { QuestionsRepository, QuestionEntity } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: QuestionEntity): Promise<QuestionEntity> {
    return this.prisma.question.create({ data });
  }

  findAll(filter?: Partial<QuestionEntity>): Promise<QuestionEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<QuestionEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<QuestionEntity>): Promise<QuestionEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
