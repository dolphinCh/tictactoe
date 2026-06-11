import { Injectable } from '@angular/core';
import { WordGameService } from '../shared/word-game/word-game.service';
import { WordEntry } from '../shared/word-game/word-game.models';
import { GEO_WORDS } from './geografija.models';

@Injectable({ providedIn: 'root' })
export class GeografijaService extends WordGameService {
  protected override getWords(): WordEntry[] {
    return GEO_WORDS;
  }
}
