import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
  @Input() title = '';
  @Input() subtitle = '';

  protected game = inject(QuizService);

  choiceClass(choice: string): string {
    if (!this.game.answered()) return '';
    if (choice === this.game.question().answer) return 'correct';
    if (choice === this.game.selected()) return 'wrong';
    return '';
  }
}
