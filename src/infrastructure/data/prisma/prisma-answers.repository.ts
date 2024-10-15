/* eslint-disable @typescript-eslint/no-unused-vars */
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
  async findOne(id: string): Promise<AnswerEntity> {
    return this.prisma.answer.findUnique({ where: { id } });
  }

  async findOpenAnswer(openAnswer: string): Promise<AnswerEntity> {
    // TODO : IA Intégration
    return this.prisma.answer.findFirst({ where: { label: openAnswer } });
  }

  update(id: string, data: Partial<AnswerEntity>): Promise<AnswerEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
