import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Cell } from '../game.models';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent {
  value = input.required<Cell>();
  disabled = input<boolean>(false);
  cellClick = output<void>();
}
