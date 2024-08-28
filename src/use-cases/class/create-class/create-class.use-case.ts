import {
  CreatedClassMapper,
  CreateClassMapper,
  ClassRepository,
  UseCase,
} from 'src/core';
import { CreatedClassDto, CreateClassDto } from 'src/shared';

export class CreateClassUseCase implements UseCase<CreateClassDto> {
  private createClassMapper: CreateClassMapper;
  private createdClassMapper: CreatedClassMapper;

  constructor(private readonly repository: ClassRepository) {
    this.createClassMapper = new CreateClassMapper();
    this.createdClassMapper = new CreatedClassMapper();
  }

  public async execute(classRoom: CreateClassDto): Promise<CreatedClassDto> {
    const entity = this.createClassMapper.mapFrom(classRoom);
    const createdClass = await this.repository.create(entity);
    return this.createdClassMapper.mapTo(createdClass);
  }
}
