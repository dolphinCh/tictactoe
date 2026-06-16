import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tictactoe', pathMatch: 'full' },
  {
    path: 'tictactoe',
    loadComponent: () => import('./game/board/board.component').then(m => m.BoardComponent),
  },
  {
    path: 'besilka',
    loadComponent: () => import('./besilka/besilka.component').then(m => m.BesilkaComponent),
  },
  {
    path: 'geografija',
    loadComponent: () => import('./geografija/geografija.component').then(m => m.GeografijaComponent),
  },
  {
    path: 'matematika',
    loadComponent: () => import('./matematika/matematika.component').then(m => m.MatematikaComponent),
  },
  {
    path: 'gatanki',
    loadComponent: () => import('./gatanki/gatanki.component').then(m => m.GatankiComponent),
  },
];
