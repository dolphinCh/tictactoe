import { Injectable, computed, signal } from '@angular/core';
import { MathGameState, MathQuestion, Operation } from './matematika.models';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChoices(answer: number, isMultiplication: boolean): number[] {
  const maxVal = isMultiplication ? 100 : 10;
  const choices = new Set<number>([answer]);

  let attempts = 0;
  while (choices.size < 4 && attempts < 200) {
    attempts++;
    const delta = rand(1, 5);
    const candidate = answer + (Math.random() < 0.5 ? delta : -delta);
    if (candidate >= 1 && candidate <= maxVal) choices.add(candidate);
  }

  // fallback: sequential fill
  for (let i = 1; choices.size < 4; i++) {
    if (answer + i <= maxVal) choices.add(answer + i);
    else if (answer - i >= 1) choices.add(answer - i);
  }

  return Array.from(choices).sort(() => Math.random() - 0.5);
}

function generateQuestion(): MathQuestion {
  const useMultiplication = Math.random() < 0.5;

  let display: string;
  let answer: number;
  const operation: Operation = useMultiplication ? '×' : '÷';

  if (useMultiplication) {
    const a = rand(1, 10);
    const b = rand(1, 10);
    answer = a * b;
    display = `${a} × ${b} = ?`;
  } else {
    const quotient = rand(1, 10);
    const divisor = rand(1, 10);
    const dividend = quotient * divisor;
    answer = quotient;
    display = `${dividend} ÷ ${divisor} = ?`;
  }

  return {
    display,
    answer,
    choices: generateChoices(answer, useMultiplication),
    operation,
  };
}

@Injectable({ providedIn: 'root' })
export class MatematikaService {
  private _state = signal<MathGameState>({
    question: generateQuestion(),
    selected: null,
    answered: false,
    correct: 0,
    total: 0,
  });

  readonly question = computed(() => this._state().question);
  readonly selected = computed(() => this._state().selected);
  readonly answered = computed(() => this._state().answered);
  readonly correct = computed(() => this._state().correct);
  readonly total = computed(() => this._state().total);
  readonly isCorrect = computed(() => {
    const s = this._state();
    return s.answered && s.selected === s.question.answer;
  });

  answer(choice: number): void {
    const s = this._state();
    if (s.answered) return;
    this._state.set({
      ...s,
      selected: choice,
      answered: true,
      correct: choice === s.question.answer ? s.correct + 1 : s.correct,
      total: s.total + 1,
    });
  }

  nextQuestion(): void {
    this._state.update(s => ({
      ...s,
      question: generateQuestion(),
      selected: null,
      answered: false,
    }));
  }

  newGame(): void {
    this._state.set({
      question: generateQuestion(),
      selected: null,
      answered: false,
      correct: 0,
      total: 0,
    });
  }
}
