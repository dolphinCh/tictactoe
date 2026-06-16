import { Injectable, computed, signal } from '@angular/core';
import { GATANKI, Gatanka, GatankiGameState } from './gatanki.models';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pickGatanka(exclude?: Gatanka): Gatanka {
  const pool = exclude ? GATANKI.filter(g => g !== exclude) : GATANKI;
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildState(gatanka: Gatanka, prev: Omit<GatankiGameState, 'gatanka' | 'choices' | 'selected' | 'answered'>): GatankiGameState {
  return {
    ...prev,
    gatanka,
    choices: shuffle([gatanka.answer, ...gatanka.wrong]),
    selected: null,
    answered: false,
  };
}

@Injectable({ providedIn: 'root' })
export class GatankiService {
  private _state = signal<GatankiGameState>(
    buildState(pickGatanka(), { correct: 0, total: 0 })
  );

  readonly gatanka = computed(() => this._state().gatanka);
  readonly choices = computed(() => this._state().choices);
  readonly selected = computed(() => this._state().selected);
  readonly answered = computed(() => this._state().answered);
  readonly correct = computed(() => this._state().correct);
  readonly total = computed(() => this._state().total);
  readonly isCorrect = computed(() => {
    const s = this._state();
    return s.answered && s.selected === s.gatanka.answer;
  });

  answer(choice: string): void {
    const s = this._state();
    if (s.answered) return;
    this._state.set({
      ...s,
      selected: choice,
      answered: true,
      correct: choice === s.gatanka.answer ? s.correct + 1 : s.correct,
      total: s.total + 1,
    });
  }

  next(): void {
    const current = this._state().gatanka;
    this._state.update(s => buildState(pickGatanka(current), { correct: s.correct, total: s.total }));
  }

  newGame(): void {
    this._state.set(buildState(pickGatanka(), { correct: 0, total: 0 }));
  }
}
