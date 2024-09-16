import {  SubjectEntity, SubjectsRepository } from '@/core';
import { PrismaService } from './prisma.service';

 export class PrismaSubjectsRepository implements SubjectsRepository {

  constructor(private prisma: PrismaService) {}

  async create(data: SubjectEntity): Promise<SubjectEntity> {

     const { questionIds, ...subjectData } = data;

    const subject = await this.prisma.subject.create({
      data: {
        ...subjectData,
        questions: {
          connect: questionIds?.map(id => ({ id })),
        },
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
        },
    });
    return subject
  }

  async findAll(filter?: Partial<SubjectEntity>): Promise<SubjectEntity[]> {
    return this.prisma.subject.findMany({
        include: {
          questions: {
            include: {
              answers: true, 
            },
          },
        },
      });
  }

  async findOne(id: string): Promise<SubjectEntity> {
     return this.prisma.subject.findUnique({ where: { id }, include: {
        questions: {
          include: {
            answers: true, 
          },
        },
      },});
  }

  async update(id: string, data: Partial<SubjectEntity>): Promise<SubjectEntity> {
    const { questionIds, ...subjectData } = data;

    return this.prisma.subject.update({
      where: { id },
      data: {
        ...subjectData,
        questions: {
          set: questionIds?.map(id => ({ id })),
        },
      },
      include: {
        questions: {
          include: {
            answers: true, 
          },
        },
      },
    });
  }  
  async remove(id: string): Promise<void> {
    await this.prisma.subject.delete({ where: { id } });
  }
 }
