import { Mapper } from '@/core/base';
import {  SubjectEntity } from '@/core/domain/entities';
import { CreatedSubjectDto } from '@/shared';
import { CreatedAnswerDto } from '@/shared/dtos/answers';
import { CreatedQuestionDto } from '@/shared/dtos/questions';

export class CreatedSubjectMapper extends Mapper<CreatedSubjectDto, SubjectEntity> {
  public mapFrom(data: CreatedSubjectDto): SubjectEntity {
    const subject = new SubjectEntity();
   
    subject.id = data.id;
    subject.label = data.label;
    subject.questions=data.questions;
   
    return subject;
  }
  
  public mapTo(data: SubjectEntity): CreatedSubjectDto {
    const subject = new CreatedSubjectDto();
    subject.id = data.id;
    subject.label = data.label;
    subject.questions = data.questions.map(question => {
      const addedQuestion = new CreatedQuestionDto();
      if (!question.id) {
        throw new Error("Missing ID for answer in CreatedQuestionDto");
      }
      addedQuestion.id = question.id;  
      addedQuestion.label = question.label;
      addedQuestion.title = question.title;
      addedQuestion.description=question.description;
      addedQuestion.point=question.point;
      addedQuestion.type=question.type;
      addedQuestion.answers = question.answers.map(answer => {
        const questiondAnswer = new CreatedAnswerDto();
        if (!answer.id) {
          throw new Error("Missing ID for answer in CreatedAnswerDto");
        }
        questiondAnswer.id = answer.id;  
        questiondAnswer.label = answer.label;
        questiondAnswer.isCorrect = answer.isCorrect;
    
        return questiondAnswer;
      });
      return addedQuestion;
    });  
    return subject;
  }
}
