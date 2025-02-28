import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component'),
    children:[
      {
        path: 'change-detection',
        title:'Change detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title:'Control flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title:'Defer options',
        loadComponent: () => import('./dashboard/pages/defer-opitions/defer-opitions.component'),
      },
      {
        path: 'defer-views',
        title:'Defer views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title:'User View',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title:'User List',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition-1',
        title:'View Transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition-2',
        title:'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
      },
      {
        path: 'inputs-outputs',
        title:'Inputs Outputs',
        loadComponent: () => import('./dashboard/pages/input-ouput/input-ouput.component'),
      },
      {
        path: 'material',
        title:'Material components',
        loadComponent: () => import('./dashboard/pages/material/material.component'),
      },
      {
        path:'',
        redirectTo:'control-flow',
        pathMatch:'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
];
