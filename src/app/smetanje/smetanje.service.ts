import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { SMETANJE } from './smetanje.data';

@Injectable()
export class SmetanjeService extends QuizService {
  protected override getQuestions() { return SMETANJE; }
}
