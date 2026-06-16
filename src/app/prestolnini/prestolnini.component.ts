import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { PrestolniniService } from './prestolnini.service';

@Component({
  selector: 'app-prestolnini',
  imports: [QuizComponent],
  template: `<app-quiz title="Престолнини" subtitle="Која е главниот град?" />`,
  providers: [{ provide: QuizService, useClass: PrestolniniService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrestolniniComponent {}
