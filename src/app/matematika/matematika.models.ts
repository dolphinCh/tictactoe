export type Operation = '×' | '÷';

export interface MathQuestion {
  display: string;
  answer: number;
  choices: number[];
  operation: Operation;
}

export interface MathGameState {
  question: MathQuestion;
  selected: number | null;
  answered: boolean;
  correct: number;
  total: number;
}
