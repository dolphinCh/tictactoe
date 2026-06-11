import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WordGameService } from '../shared/word-game/word-game.service';
import { WordGameComponent } from '../shared/word-game/word-game.component';
import { GeografijaService } from './geografija.service';

@Component({
  selector: 'app-geografija',
  imports: [WordGameComponent],
  template: `<app-word-game title="Брза географија" winMessage="Браво! Го погоди местото! 🌍" />`,
  styleUrl: './geografija.component.css',
  providers: [{ provide: WordGameService, useExisting: GeografijaService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeografijaComponent {}
