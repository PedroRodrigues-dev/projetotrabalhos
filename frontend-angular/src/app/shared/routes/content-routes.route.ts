import { Routes } from '@angular/router';

export const CONTENT_ROUTE: Routes = [
  {
    path: 'materia',
    loadChildren: () =>
      import('../../pages/materia/materia.module').then((m) => m.MateriaModule),
  },
  {
    path: 'atividade',
    loadChildren: () =>
      import('../../pages/atividade/atividade.module').then((m) => m.AtividadeModule),
  }
];