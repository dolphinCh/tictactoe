import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { BOI } from './boi.data';

@Injectable()
export class BoiService extends QuizService {
  protected override getQuestions() { return BOI; }
}
