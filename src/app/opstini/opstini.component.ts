import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { OpstimiService } from './opstini.service';

@Component({
  selector: 'app-opstini',
  imports: [QuizComponent],
  template: `<app-quiz title="Општини" subtitle="Погоди го македонскиот град" />`,
  providers: [{ provide: QuizService, useClass: OpstimiService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpstimiComponent {}
