import { Injectable } from '@angular/core';
import { QuizService } from '../shared/quiz/quiz.service';
import { ZIVOTNI } from './zivotni.data';

@Injectable()
export class ZivotniService extends QuizService {
  protected override getQuestions() { return ZIVOTNI; }
}
