import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'dark' | 'pink';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private theme = signal<Theme>('dark');

  readonly current = computed(() => this.theme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  toggle(): void {
    this.theme.update(t => (t === 'dark' ? 'pink' : 'dark'));
  }
}
