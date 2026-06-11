import { Component, signal, inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  theme = inject(ThemeService);
  menuOpen = signal(false);

  @HostListener('document:keydown.escape')
  closeOnEsc() {
    this.menuOpen.set(false);
  }
}
