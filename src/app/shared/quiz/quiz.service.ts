import { computed, signal } from '@angular/core';
import { QuizQuestion, QuizState } from './quiz.models';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export abstract class QuizService {
  protected abstract getQuestions(): QuizQuestion[];

  private readonly _state = signal<QuizState>(this._build(this._pick()));

  readonly question = computed(() => this._state().question);
  readonly choices = computed(() => this._state().choices);
  readonly selected = computed(() => this._state().selected);
  readonly answered = computed(() => this._state().answered);
  readonly correct = computed(() => this._state().correct);
  readonly total = computed(() => this._state().total);
  readonly isCorrect = computed(() => {
    const s = this._state();
    return s.answered && s.selected === s.question.answer;
  });

  answer(choice: string): void {
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

  next(): void {
    const current = this._state().question;
    this._state.update(s => this._build(this._pick(current), s));
  }

  newGame(): void {
    this._state.set(this._build(this._pick()));
  }

  private _pick(exclude?: QuizQuestion): QuizQuestion {
    const pool = exclude
      ? this.getQuestions().filter(q => q !== exclude)
      : this.getQuestions();
    return pool[Math.floor(Math.random() * pool.length)];
  }

  private _build(question: QuizQuestion, prev?: QuizState): QuizState {
    return {
      question,
      choices: shuffle([question.answer, ...question.wrong]),
      selected: null,
      answered: false,
      correct: prev?.correct ?? 0,
      total: prev?.total ?? 0,
    };
  }
}
