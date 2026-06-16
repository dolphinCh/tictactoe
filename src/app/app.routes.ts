import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tictactoe', pathMatch: 'full' },
  { path: 'tictactoe',    loadComponent: () => import('./game/board/board.component').then(m => m.BoardComponent) },
  { path: 'besilka',      loadComponent: () => import('./besilka/besilka.component').then(m => m.BesilkaComponent) },
  { path: 'geografija',   loadComponent: () => import('./geografija/geografija.component').then(m => m.GeografijaComponent) },
  { path: 'matematika',   loadComponent: () => import('./matematika/matematika.component').then(m => m.MatematikaComponent) },
  { path: 'gatanki',      loadComponent: () => import('./gatanki/gatanki.component').then(m => m.GatankiComponent) },
  { path: 'zivotni',      loadComponent: () => import('./zivotni/zivotni.component').then(m => m.ZivotniComponent) },
  { path: 'prestolnini',  loadComponent: () => import('./prestolnini/prestolnini.component').then(m => m.PrestolniniComponent) },
  { path: 'antonimi',     loadComponent: () => import('./antonimi/antonimi.component').then(m => m.AntonimiComponent) },
  { path: 'boi',          loadComponent: () => import('./boi/boi.component').then(m => m.BoiComponent) },
  { path: 'azbuka',       loadComponent: () => import('./azbuka/azbuka.component').then(m => m.AzbukaComponent) },
  { path: 'smetanje',     loadComponent: () => import('./smetanje/smetanje.component').then(m => m.SmetanjeComponent) },
  { path: 'opstini',      loadComponent: () => import('./opstini/opstini.component').then(m => m.OpstimiComponent) },
];
