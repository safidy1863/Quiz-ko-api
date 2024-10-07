import { CreatedSubjectMapper, CreateSubjectMapper, SubjectsRepository, UseCase } from "@/core";
import { CreatedSubjectDto, CreateSubjectDto } from "@/shared";

export class CreateSubjectUseCase implements UseCase<CreateSubjectDto> {
  private createSubjectMapper: CreateSubjectMapper;
  private createdSubjectMapper: CreatedSubjectMapper;

  constructor(private readonly repository: SubjectsRepository) {
    this.createSubjectMapper = new CreateSubjectMapper();
    this.createdSubjectMapper = new CreatedSubjectMapper();
  }

  public async execute(subject: CreateSubjectDto): Promise<CreatedSubjectDto> {
    const entity = this.createSubjectMapper.mapFrom(subject);
    const createdSubject = await this.repository.create(entity);
    return this.createdSubjectMapper.mapTo(createdSubject);
  }
}
