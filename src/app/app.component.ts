import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ComponentWithFirstStepComponent } from './components/component-with-first-step/component-with-first-step.component';
import { TourServiceService } from './services/tour-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ComponentWithFirstStepComponent) fisrt: ComponentWithFirstStepComponent;

  title = 'app';

  constructor(private tourService: TourServiceService) { }

  ngAfterViewInit() {
    this.tourService.startGuide();
  }
}
