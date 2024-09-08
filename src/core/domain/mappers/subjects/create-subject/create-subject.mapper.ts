import { Mapper } from '@/core/base';
import { SubjectEntity } from '@/core/domain/entities';
import { CreateSubjectDto } from '@/shared';

export class CreateSubjectMapper extends Mapper<CreateSubjectDto, SubjectEntity> {
  public mapFrom(data: CreateSubjectDto): SubjectEntity {
    const subject = new SubjectEntity();

    subject.label = data.label;
    subject.questionIds=data.questionIds;

    return subject;
  }
  mapTo(data: SubjectEntity): CreateSubjectDto {
    const subject = new CreateSubjectDto();

    subject.id = data.id;
    subject.label = data.label;
    subject.questionIds=data.questionIds;

    return subject;
  }
}
