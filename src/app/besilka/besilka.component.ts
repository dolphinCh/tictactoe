import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WordGameService } from '../shared/word-game/word-game.service';
import { WordGameComponent } from '../shared/word-game/word-game.component';
import { BesilkaService } from './besilka.service';

@Component({
  selector: 'app-besilka',
  imports: [WordGameComponent],
  template: `<app-word-game title="Бесилка" winMessage="Браво! Го погоди зборот! 🎉" />`,
  providers: [{ provide: WordGameService, useExisting: BesilkaService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BesilkaComponent {}
