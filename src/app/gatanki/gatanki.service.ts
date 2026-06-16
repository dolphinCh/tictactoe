import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { GATANKI } from './gatanki.data';

@Injectable()
export class GatankiService extends QuizService {
  protected override getQuestions() { return GATANKI; }
}
