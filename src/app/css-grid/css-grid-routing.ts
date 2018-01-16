import { GridHomeComponent } from './grid-home/grid-home.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';

const cssGridRoutes: Routes = [
  { path: 'grid-home', component: GridHomeComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'grid-home' }
];

export const cssGridRouting: ModuleWithProviders = RouterModule.forChild(cssGridRoutes);
