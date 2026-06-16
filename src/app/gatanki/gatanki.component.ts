import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GatankiService } from './gatanki.service';

@Component({
  selector: 'app-gatanki',
  templateUrl: './gatanki.component.html',
  styleUrl: './gatanki.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GatankiComponent {
  readonly game = inject(GatankiService);

  choiceClass(choice: string): string {
    if (!this.game.answered()) return '';
    if (choice === this.game.gatanka().answer) return 'correct';
    if (choice === this.game.selected()) return 'wrong';
    return '';
  }
}
