import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { AntonimiService } from './antonimi.service';

@Component({
  selector: 'app-antonimi',
  imports: [QuizComponent],
  template: `<app-quiz title="Антоними" subtitle="Кој е спротивниот збор?" />`,
  providers: [{ provide: QuizService, useClass: AntonimiService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AntonimiComponent {}
