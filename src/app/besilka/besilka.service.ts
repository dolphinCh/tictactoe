import { Injectable, signal, computed } from '@angular/core';
import { MAX_HINTS, MAX_WRONG, WordEntry, WORDS } from './besilka.models';

function pickRandom(exclude?: string): WordEntry {
  const pool = exclude ? WORDS.filter(w => w.word !== exclude) : WORDS;
  return pool[Math.floor(Math.random() * pool.length)];
}

@Injectable({ providedIn: 'root' })
export class BesilkaService {
  private entry = signal<WordEntry>(pickRandom());
  private guessed = signal<Set<string>>(new Set());
  private _hintsLeft = signal(MAX_HINTS);

  readonly word = computed(() => this.entry().word);
  readonly category = computed(() => this.entry().category);
  readonly hint = computed(() => this.entry().hint);
  readonly hintsLeft = computed(() => this._hintsLeft());
  readonly guessedLetters = computed(() => this.guessed());

  readonly displayLetters = computed(() =>
    this.entry().word.split('').map(l => (this.guessed().has(l) ? l : null))
  );

  readonly wrongCount = computed(() => {
    const word = this.entry().word;
    return [...this.guessed()].filter(l => !word.includes(l)).length;
  });

  readonly isWon = computed(() => this.displayLetters().every(l => l !== null));
  readonly isLost = computed(() => this.wrongCount() >= MAX_WRONG);
  readonly gameOver = computed(() => this.isWon() || this.isLost());

  guessLetter(letter: string): void {
    if (this.gameOver() || this.guessed().has(letter)) return;
    this.guessed.update(s => new Set([...s, letter]));
  }

  useHint(): void {
    if (this._hintsLeft() <= 0 || this.gameOver()) return;
    const word = this.entry().word;
    const guessed = this.guessed();
    const hidden = [...new Set(word.split(''))].filter(l => !guessed.has(l));
    if (!hidden.length) return;
    const letter = hidden[Math.floor(Math.random() * hidden.length)];
    this.guessed.update(s => new Set([...s, letter]));
    this._hintsLeft.update(n => n - 1);
  }

  newGame(): void {
    this.entry.set(pickRandom(this.entry().word));
    this.guessed.set(new Set());
    this._hintsLeft.set(MAX_HINTS);
  }
}
