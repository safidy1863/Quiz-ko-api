/* eslint-disable @typescript-eslint/no-unused-vars */
import { QuestionsRepository, QuestionEntity } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: QuestionEntity): Promise<QuestionEntity> {
    return this.prisma.question.create({ data });
  }

  async findAll(filter?: Partial<QuestionEntity>): Promise<QuestionEntity[]> {
    return this.prisma.question.findMany();
  }

  async findOne(id: string): Promise<QuestionEntity> {
    return this.prisma.question.findUnique({ where: { id } });
  }
  update(id: string, data: Partial<QuestionEntity>): Promise<QuestionEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
