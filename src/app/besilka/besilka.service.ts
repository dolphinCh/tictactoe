import { Injectable } from '@angular/core';
import { WordGameService } from '../shared/word-game/word-game.service';
import { WordEntry } from '../shared/word-game/word-game.models';
import { BESILKA_WORDS } from './besilka.models';

@Injectable({ providedIn: 'root' })
export class BesilkaService extends WordGameService {
  protected override getWords(): WordEntry[] {
    return BESILKA_WORDS;
  }
}
