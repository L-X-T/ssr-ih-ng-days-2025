import { Routes } from '@angular/router';
import DemoComponent from './demo/demo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    title: 'Defer & Incremental Hydration Demo',
    component: DemoComponent,
  },
  {
    path: 'alternate',
    title: 'Alternate Component',
    loadComponent: () => import('./alternate/alternate.component').then((m) => m.AlternateComponent),
  },
];
