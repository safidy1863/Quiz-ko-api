import { SubjectsRepository, UseCase } from "@/core";
import { successMessage } from "@/shared";

export class DeleteSubjectUseCase implements UseCase<string> {
  constructor(private readonly repository: SubjectsRepository) {}

  public async execute(id: string): Promise<string> {
    await this.repository.remove(id);
    return successMessage('subject').deleted;
  }
}
