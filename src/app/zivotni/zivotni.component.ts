import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { ZivotniService } from './zivotni.service';

@Component({
  selector: 'app-zivotni',
  imports: [QuizComponent],
  template: `<app-quiz title="Животни" subtitle="Погоди го животното" />`,
  providers: [{ provide: QuizService, useClass: ZivotniService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZivotniComponent {}
