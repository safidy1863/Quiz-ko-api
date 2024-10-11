/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubjectEntity, SubjectsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaSubjectsRepository implements SubjectsRepository {
  constructor(private prisma: PrismaService) {}
  create(data: SubjectEntity): Promise<SubjectEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(filter?: Partial<SubjectEntity>): Promise<SubjectEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<SubjectEntity> {
    return this.prisma.subject.findUnique({ where: { id } });
  }
  update(id: string, data: Partial<SubjectEntity>): Promise<SubjectEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
