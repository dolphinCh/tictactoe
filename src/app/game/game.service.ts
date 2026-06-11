import { Injectable, signal, computed } from '@angular/core';
import { Cell, GameState, Player } from './game.models';

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function detectWinner(board: Cell[]): Player | 'draw' | null {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  if (board.every(cell => cell !== null)) return 'draw';
  return null;
}

@Injectable({ providedIn: 'root' })
export class GameService {
  private state = signal<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
    scores: { X: 0, O: 0 },
  });

  private names = signal<Record<Player, string>>({ X: '', O: '' });

  readonly board = computed(() => this.state().board);
  readonly currentPlayer = computed(() => this.state().currentPlayer);
  readonly winner = computed(() => this.state().winner);
  readonly gameOver = computed(() => this.state().gameOver);
  readonly scores = computed(() => this.state().scores);
  readonly playerNames = computed(() => this.names());

  displayName(player: Player): string {
    return this.names()[player].trim() || `Player ${player}`;
  }

  setName(player: Player, name: string): void {
    this.names.update(n => ({ ...n, [player]: name }));
  }

  makeMove(index: number): void {
    const s = this.state();
    if (s.gameOver || s.board[index]) return;

    const board = [...s.board] as Cell[];
    board[index] = s.currentPlayer;
    const result = detectWinner(board);
    const gameOver = result !== null;
    const scores = { ...s.scores };

    if (result && result !== 'draw') scores[result]++;

    this.state.set({
      board,
      currentPlayer: s.currentPlayer === 'X' ? 'O' : 'X',
      winner: result,
      gameOver,
      scores,
    });
  }

  newGame(): void {
    const scores = this.state().scores;
    this.state.set({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      gameOver: false,
      scores,
    });
  }
}
