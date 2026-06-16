import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatematikaService } from './matematika.service';

@Component({
  selector: 'app-matematika',
  templateUrl: './matematika.component.html',
  styleUrl: './matematika.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatematikaComponent {
  readonly game = inject(MatematikaService);

  choiceClass(choice: number): string {
    if (!this.game.answered()) return '';
    if (choice === this.game.question().answer) return 'correct';
    if (choice === this.game.selected()) return 'wrong';
    return '';
  }
}
