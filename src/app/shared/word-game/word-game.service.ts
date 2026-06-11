import { computed, signal, Signal, WritableSignal } from '@angular/core';
import { MAX_HINTS, MAX_WRONG, WordEntry } from './word-game.models';

function pickRandom(words: WordEntry[], exclude?: string): WordEntry {
  const pool = exclude ? words.filter(w => w.word !== exclude) : words;
  return pool[Math.floor(Math.random() * pool.length)];
}

export abstract class WordGameService {
  protected abstract getWords(): WordEntry[];

  private readonly entry: WritableSignal<WordEntry>;
  private readonly guessed: WritableSignal<Set<string>>;
  private readonly _hintsLeft: WritableSignal<number>;

  readonly word: Signal<string>;
  readonly category: Signal<string>;
  readonly hint: Signal<string>;
  readonly hintsLeft: Signal<number>;
  readonly guessedLetters: Signal<Set<string>>;
  readonly displayLetters: Signal<(string | null)[]>;
  readonly wrongCount: Signal<number>;
  readonly isWon: Signal<boolean>;
  readonly isLost: Signal<boolean>;
  readonly gameOver: Signal<boolean>;

  constructor() {
    this.entry = signal<WordEntry>(pickRandom(this.getWords()));
    this.guessed = signal<Set<string>>(new Set());
    this._hintsLeft = signal(MAX_HINTS);

    this.word = computed(() => this.entry().word);
    this.category = computed(() => this.entry().category);
    this.hint = computed(() => this.entry().hint);
    this.hintsLeft = this._hintsLeft.asReadonly();
    this.guessedLetters = this.guessed.asReadonly();
    this.displayLetters = computed(() =>
      this.entry().word.split('').map(l => (this.guessed().has(l) ? l : null))
    );
    this.wrongCount = computed(() => {
      const word = this.entry().word;
      return [...this.guessed()].filter(l => !word.includes(l)).length;
    });
    this.isWon = computed(() => this.displayLetters().every(l => l !== null));
    this.isLost = computed(() => this.wrongCount() >= MAX_WRONG);
    this.gameOver = computed(() => this.isWon() || this.isLost());
  }

  guessLetter(letter: string): void {
    if (this.gameOver() || this.guessed().has(letter)) return;
    this.guessed.update(s => new Set([...s, letter]));
  }

  useHint(): void {
    if (this._hintsLeft() <= 0 || this.gameOver()) return;
    const word = this.entry().word;
    const hidden = [...new Set(word.split(''))].filter(l => !this.guessed().has(l));
    if (!hidden.length) return;
    const letter = hidden[Math.floor(Math.random() * hidden.length)];
    this.guessed.update(s => new Set([...s, letter]));
    this._hintsLeft.update(n => n - 1);
  }

  newGame(): void {
    this.entry.set(pickRandom(this.getWords(), this.entry().word));
    this.guessed.set(new Set());
    this._hintsLeft.set(MAX_HINTS);
  }
}
