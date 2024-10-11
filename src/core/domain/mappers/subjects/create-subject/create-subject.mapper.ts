import { Mapper } from '@/core/base';
import { SubjectEntity } from '@/core/domain/entities';
import { CreateSubjectDto } from '@/shared';

export class CreateSubjectMapper extends Mapper<
  CreateSubjectDto,
  SubjectEntity
> {
  public mapFrom(data: CreateSubjectDto): SubjectEntity {
    const subject = new SubjectEntity();

    subject.label = data.label;

    return subject;
  }

  public mapTo(data: CreateSubjectDto): SubjectEntity {
    const subject = new SubjectEntity();

    subject.id = data.id;
    subject.label = data.label;

    return subject;
  }
}
