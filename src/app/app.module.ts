import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserGuideStepDirective } from './directives/user-guide-step.directive';
import { ComponentWithFirstStepComponent } from './components/component-with-first-step/component-with-first-step.component';
import { ComponentWithSecondStepComponent } from './components/component-with-second-step/component-with-second-step.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { TourServiceService } from './services/tour-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UserGuideStepDirective,
    ComponentWithFirstStepComponent,
    ComponentWithSecondStepComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  providers: [TourServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
