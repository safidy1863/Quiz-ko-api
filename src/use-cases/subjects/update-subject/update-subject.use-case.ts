import { CreatedSubjectMapper, CreateSubjectMapper, SubjectsRepository, UseCase } from "@/core";
import { CreateSubjectDto } from "@/shared";

export class UpdateSubjectUseCase implements UseCase<CreateSubjectDto> {
  private updateSubjectMapper: CreateSubjectMapper;
  private updatedSubjectMapper: CreatedSubjectMapper;

  constructor(private readonly repository: SubjectsRepository) {
    this.updateSubjectMapper = new CreateSubjectMapper();
    this.updatedSubjectMapper = new CreatedSubjectMapper();
  }

  public async execute(
    id: string,
    Subject: CreateSubjectDto,
  ): Promise<CreateSubjectDto> {
    const entity = this.updateSubjectMapper.mapFrom(Subject);
    const updatedSubject = await this.repository.update(id, entity);
    return this.updatedSubjectMapper.mapTo(updatedSubject);
  }
}
