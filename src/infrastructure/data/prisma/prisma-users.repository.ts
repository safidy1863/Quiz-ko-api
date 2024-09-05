import { UserEntity, UsersRepository } from '@/core';
import { PrismaService } from './prisma.service';

export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    return this.prisma.user.create({ data });
  }

  async findAll(filter?: Partial<UserEntity>): Promise<UserEntity[]> {
    return this.prisma.user.findMany({ where: filter });
  }

  async findOne(id : string): Promise<UserEntity> {
    return this.prisma.user.findUnique({ where: {id } });
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
