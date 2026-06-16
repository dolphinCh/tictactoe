import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CellComponent } from '../cell/cell.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  imports: [CellComponent, FormsModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  game = inject(GameService);

  readonly statusMessage = computed(() => {
    const winner = this.game.winner();
    if (winner === 'draw') return 'Нерешено!';
    if (winner) return `${this.game.displayName(winner)} победи!`;
    return `Ред на ${this.game.displayName(this.game.currentPlayer())}`;
  });
}
