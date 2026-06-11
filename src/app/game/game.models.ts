export type Player = 'X' | 'O';
export type Cell = Player | null;

export interface GameState {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | 'draw' | null;
  gameOver: boolean;
  scores: Record<Player, number>;
}
