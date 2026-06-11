import { Component, inject, signal } from '@angular/core';
import { GeografijaService } from './geografija.service';
import { HangmanComponent } from '../shared/hangman/hangman.component';
import { MAX_WRONG } from './geografija.models';

const ALPHABET = 'АБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ'.split('');

@Component({
  selector: 'app-geografija',
  imports: [HangmanComponent],
  templateUrl: './geografija.component.html',
  styleUrl: './geografija.component.css',
})
export class GeografijaComponent {
  service = inject(GeografijaService);
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
