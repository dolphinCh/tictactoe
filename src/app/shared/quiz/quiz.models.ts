export interface QuizQuestion {
  question: string;
  answer: string;
  wrong: [string, string, string];
  colorHex?: string;
}

export interface QuizState {
  question: QuizQuestion;
  choices: string[];
  selected: string | null;
  answered: boolean;
  correct: number;
  total: number;
}
