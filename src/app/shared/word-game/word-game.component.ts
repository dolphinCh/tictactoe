import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { HangmanComponent } from '../hangman/hangman.component';
import { ALPHABET, MAX_WRONG } from './word-game.models';
import { WordGameService } from './word-game.service';

@Component({
  selector: 'app-word-game',
  imports: [HangmanComponent],
  templateUrl: './word-game.component.html',
  styleUrl: './word-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordGameComponent {
  service = inject(WordGameService);
  title = input.required<string>();
  winMessage = input.required<string>();
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
