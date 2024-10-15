import { StudentEntity, StudentsRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: StudentEntity): Promise<StudentEntity> {
    return this.prisma.student.create({ data });
  }

  async findAll(filter?: Partial<StudentEntity>): Promise<StudentEntity[]> {
    return this.prisma.student.findMany({ where: filter });
  }

  async findOne(id: string): Promise<StudentEntity> {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async findByRegisterNumber(
    registrationNumber: string,
  ): Promise<StudentEntity> {
    return this.prisma.student.findFirst({ where: { registrationNumber } });
  }

  async findByUserId(userId: string): Promise<StudentEntity> {
    return this.prisma.student.findFirst({ where: { userId } });
  }

  async update(
    id: string,
    data: Partial<StudentEntity>,
  ): Promise<StudentEntity> {
    console.log(data);

    return this.prisma.student.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.student.delete({ where: { id } });
  }
}
