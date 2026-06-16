import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizComponent } from '../shared/quiz/quiz.component';
import { QuizService } from '../shared/quiz/quiz.service';
import { AzbukaService } from './azbuka.service';

@Component({
  selector: 'app-azbuka',
  imports: [QuizComponent],
  template: `<app-quiz title="Азбука" subtitle="Пополни ја буквата" />`,
  providers: [{ provide: QuizService, useClass: AzbukaService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AzbukaComponent {}
