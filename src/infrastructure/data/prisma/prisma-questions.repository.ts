import { QuestionEntity, QuestionsRepository } from '@/core';
import { PrismaService } from './prisma.service';

// export class PrismaQuestionsRepository implements QuestionsRepository {
 export class PrismaQuestionsRepository implements QuestionsRepository {

  constructor(private prisma: PrismaService) {}

  async create(data: QuestionEntity): Promise<QuestionEntity> {

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
    const { answers, ...questionData } = data;
  
    const updatedQuestion = await this.prisma.$transaction(async (prisma) => {
      // Delete all existing answers for this question
      await prisma.answer.deleteMany({
        where: { questionId: id },
      });
  
      //Update the question and add the new answers
      const updatedQuestion = await prisma.question.update({
        where: { id: id },
        data: {
          ...questionData,
          answers: {
            create: answers.map((answer) => ({
              label: answer.label,
              isCorrect: answer.isCorrect,
            })),
          },
        },
        include: {
          answers: true, // Include answers in the returned question object
        },
      });
  
      return updatedQuestion;
    });
  
    return updatedQuestion;
  }  
  async remove(id: string): Promise<void> {
    await this.prisma.question.delete({ where: { id } });
  }
 }
