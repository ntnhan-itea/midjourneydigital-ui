import { Routes } from '@angular/router';
import { NavigateParentComponent } from './navigate-parent.component';

export const NavigateComponents: Routes = [
  {
    path: 'parent/:parentId',
    component: NavigateParentComponent,
    children: [
      {
        path: 'child1/:childId',
        loadComponent: () =>
          import('./navigate-child1/navigate-child1.component').then(
            (c) => c.NavigateChild1Component
          ),
      },
      {
        path: 'child2/:childId',
        loadComponent: () =>
          import('./navigate-child2/navigate-child2.component').then(
            (c) => c.NavigateChild2Component
          ),
      },
    ],
  },
];
