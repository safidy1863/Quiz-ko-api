import { CreatedSubjectMapper, SubjectsRepository, UseCase } from "@/core";
import { CreatedSubjectDto } from "@/shared";

export class FindAllSubjectsUseCase implements UseCase<CreatedSubjectDto[]> {
  private createdSubjectMapper: CreatedSubjectMapper;

  constructor(private readonly repository: SubjectsRepository) {
    this.createdSubjectMapper = new CreatedSubjectMapper();
  }

  public async execute(): Promise<CreatedSubjectDto[]> {
    const subjects = await this.repository.findAll();
    return subjects.map((subject) => this.createdSubjectMapper.mapTo(subject));
  }
}
