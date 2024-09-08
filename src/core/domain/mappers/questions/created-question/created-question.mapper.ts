import { Mapper } from '@/core/base';
import {  QuestionEntity } from '@/core/domain/entities';
import { CreatedAnswerDto } from '@/shared/dtos/answers';
import { CreatedQuestionDto } from '@/shared/dtos/questions';

export class CreatedQuestionMapper extends Mapper<CreatedQuestionDto, QuestionEntity> {
  public mapFrom(data: CreatedQuestionDto): QuestionEntity {
    const question = new QuestionEntity();

    question.id = data.id;
    question.title = data.title;
    question.description=data.description;
    question.point=data.point;
    question.type=data.type;
    question.answers=data.answers;
    
    return question;
  }
  
  public mapTo(data: QuestionEntity): CreatedQuestionDto {
    const question = new CreatedQuestionDto();

    question.id = data.id;
    question.title = data.title;
    question.description=data.description;
    question.point=data.point;
    question.type=data.type;
    question.answers = data.answers.map(answer => {
      const createdAnswer = new CreatedAnswerDto();
      if (!answer.id) {
        throw new Error("Missing ID for answer in CreatedAnswerDto");
      }
      createdAnswer.id = answer.id;  
      createdAnswer.label = answer.label;
      createdAnswer.isCorrect = answer.isCorrect;
  
      return createdAnswer;
    });

    return question;
  }
}
