import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.css',
})
export class HangmanComponent {
  wrongCount = input.required<number>();
}
