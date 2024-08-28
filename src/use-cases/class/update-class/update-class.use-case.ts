import {
  CreatedClassMapper,
  CreateClassMapper,
  ClassRepository,
  UseCase,
} from 'src/core';
import { CreateClassDto } from 'src/shared';

export class UpdateClassUseCase implements UseCase<CreateClassDto> {
  private updateClassMapper: CreateClassMapper;
  private updatedClassMapper: CreatedClassMapper;

  constructor(private readonly repository: ClassRepository) {
    this.updateClassMapper = new CreateClassMapper();
    this.updatedClassMapper = new CreatedClassMapper();
  }

  public async execute(
    id: string,
    classRoom: CreateClassDto,
  ): Promise<CreateClassDto> {
    const entity = this.updateClassMapper.mapFrom(classRoom);
    const updatedClass = await this.repository.update(id, entity);
    return this.updatedClassMapper.mapTo(updatedClass);
  }
}
