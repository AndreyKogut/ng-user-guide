import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentWithFirstStepComponent } from './components/component-with-first-step/component-with-first-step.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentWithFirstStepComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouterModule {
}
