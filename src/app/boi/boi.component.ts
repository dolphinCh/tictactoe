import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { BoiService } from './boi.service';

@Component({
  selector: 'app-boi',
  imports: [QuizComponent],
  template: `<app-quiz title="Бои" subtitle="Која боја е ова?" />`,
  providers: [{ provide: QuizService, useClass: BoiService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoiComponent {}
