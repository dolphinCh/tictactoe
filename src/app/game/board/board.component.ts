import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CellComponent } from '../cell/cell.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  imports: [CellComponent, FormsModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  game = inject(GameService);

  get statusMessage(): string {
    const winner = this.game.winner();
    if (winner === 'draw') return "It's a draw!";
    if (winner) return `${this.game.displayName(winner)} wins!`;
    return `${this.game.displayName(this.game.currentPlayer())}'s turn`;
  }
}
