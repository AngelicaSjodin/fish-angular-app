import { Routes } from '@angular/router';
import { Game } from './game/game';
import { inject, provideAppInitializer } from '@angular/core';
import { Timer } from './components/timer/timer';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home),
    },
    {
        path: 'game',
        pathMatch: 'full',
        loadComponent: () => import('./game/game').then(m => m.Game),
    },
    
];
