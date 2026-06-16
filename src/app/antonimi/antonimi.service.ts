import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { ANTONIMI } from './antonimi.data';

@Injectable()
export class AntonimiService extends QuizService {
  protected override getQuestions() { return ANTONIMI; }
}
