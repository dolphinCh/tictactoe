import { Component, inject, signal } from '@angular/core';
import { BesilkaService } from './besilka.service';
import { HangmanComponent } from '../shared/hangman/hangman.component';
import { MAX_WRONG } from './besilka.models';

const ALPHABET = 'АБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ'.split('');

@Component({
  selector: 'app-besilka',
  imports: [HangmanComponent],
  templateUrl: './besilka.component.html',
  styleUrl: './besilka.component.css',
})
export class BesilkaComponent {
  service = inject(BesilkaService);
  readonly alphabet = ALPHABET;
  readonly maxWrong = MAX_WRONG;
  showHelp = signal(false);

  isCorrect(letter: string): boolean {
    return this.service.guessedLetters().has(letter) && this.service.word().includes(letter);
  }

  isWrong(letter: string): boolean {
    return this.service.guessedLetters().has(letter) && !this.service.word().includes(letter);
  }
}
