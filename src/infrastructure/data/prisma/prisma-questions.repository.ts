import { QuestionEntity, QuestionsRepository } from '@/core';
import { PrismaService } from './prisma.service';

// export class PrismaQuestionsRepository implements QuestionsRepository {
 export class PrismaQuestionsRepository implements QuestionsRepository {

  constructor(private prisma: PrismaService) {}

  async create(data: QuestionEntity): Promise<QuestionEntity> {
    //return this.prisma.question.create({ data });
    // const question = await this.prisma.question.create({
    //     data: {
    //       label: data.label,
    //       title: data.title,
    //       description: data.description,
    //       point: data.point,
    //       type: data.type,
    //       answers: {
    //         create: data.answers.map(answer => ({
    //           label: answer.label,
    //           isCorrect: answer.isCorrect,
    //         })),
    //       },
    //     },
    //     include: {
    //       answers: true, 
    //     },
    //   });
    
    //   return {
    //     ...question,
    //     answers: question.answers.map(answer => ({
    //       id: answer.id,
    //       label: answer.label,
    //       questionId: question.id,
    //       isCorrect: answer.isCorrect,
    //     })),
    //   };
    return this.prisma.question.create({
      data: {
        label: data.label,
        title: data.title,
        description: data.description,
        point: data.point,
        type: data.type,
        answers: {
          create: data.answers.map(answer => ({
            label: answer.label,
            isCorrect: answer.isCorrect,
          })),
        },
      },
      include: {
        answers: true, 
      },
    });
  }

  async findAll(filter?: Partial<QuestionEntity>): Promise<QuestionEntity[]> {
    return this.prisma.question.findMany({
        include: { answers: true },
      });
  }

  async findOne(id: string): Promise<QuestionEntity> {
     return this.prisma.question.findUnique({ where: { id }, include: { answers: true },});
  }

  async update(id: string, data: Partial<QuestionEntity>): Promise<QuestionEntity> {
    return this.prisma.question.findUnique({ where: { id }, include: { answers: true },});
  }

  async remove(id: string): Promise<void> {
    await this.prisma.question.delete({ where: { id } });
  }
 }
