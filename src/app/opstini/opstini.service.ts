import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { OPSTINI } from './opstini.data';

@Injectable()
export class OpstimiService extends QuizService {
  protected override getQuestions() { return OPSTINI; }
}
