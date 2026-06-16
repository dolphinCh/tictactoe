import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { PRESTOLNINI } from './prestolnini.data';

@Injectable()
export class PrestolniniService extends QuizService {
  protected override getQuestions() { return PRESTOLNINI; }
}
