import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { AZBUKA } from './azbuka.data';

@Injectable()
export class AzbukaService extends QuizService {
  protected override getQuestions() { return AZBUKA; }
}
