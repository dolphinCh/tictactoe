import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { SmetanjeService } from './smetanje.service';

@Component({
  selector: 'app-smetanje',
  imports: [QuizComponent],
  template: `<app-quiz title="Сметање" subtitle="Собирање и одземање до 20" />`,
  providers: [{ provide: QuizService, useClass: SmetanjeService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmetanjeComponent {}
