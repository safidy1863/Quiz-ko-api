/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubjectQuestionEntity, SubjectsQuestionsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaSubjectsQuestionsRepository
  implements SubjectsQuestionsRepository
{
  constructor(private prisma: PrismaService) {}

  async create(data: SubjectQuestionEntity): Promise<SubjectQuestionEntity> {
    return this.prisma.subjectQuestions.create({ data });
  }
  findAll(
    filter?: Partial<SubjectQuestionEntity>,
  ): Promise<SubjectQuestionEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<SubjectQuestionEntity> {
    throw new Error('Method not implemented.');
  }

  async findBySubjectId(subjectId: string) {
    return this.prisma.subjectQuestions.findMany({
      where: { subjectId },
      select: {
        subject: true,
        question: {
          select: {
            type: true,
            description: true,
            title: true,
            point: true,
            answers: true,
          },
        },
      },
    });
  }

  update(
    id: string,
    data: Partial<SubjectQuestionEntity>,
  ): Promise<SubjectQuestionEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
