import { Mapper } from '@/core/base';
import { SubjectEntity } from '@/core/domain/entities';
import { CreatedSubjectDto } from '@/shared';

export class CreatedSubjectMapper extends Mapper<
  CreatedSubjectDto,
  SubjectEntity
> {
  public mapFrom(data: CreatedSubjectDto): SubjectEntity {
    const subject = new SubjectEntity();

    subject.id = data.id;
    subject.label = data.label;

    return subject;
  }

  public mapTo(data: SubjectEntity): CreatedSubjectDto {
    const subject = new CreatedSubjectDto();

    subject.id = data.id;
    subject.label = data.label;

    return subject;
  }
}
