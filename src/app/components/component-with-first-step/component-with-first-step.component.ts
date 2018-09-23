import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

import { TourServiceService } from '../../services/tour-service.service';
import { ComponentWithSecondStepComponent } from '../component-with-second-step/component-with-second-step.component';
import { BaseGuideComponent } from '../../helpers/base-guide-component';

@Component({
  selector: 'app-component-with-first-step',
  templateUrl: './component-with-first-step.component.html',
  styleUrls: ['./component-with-first-step.component.css']
})
export class ComponentWithFirstStepComponent extends BaseGuideComponent {
  @ViewChild(ComponentWithSecondStepComponent) second: ComponentWithSecondStepComponent;

  constructor(private tourService: TourServiceService) { super(tourService); }

  beforeNext() {
    return of(true).pipe(
      delay(2000),
    );
  }

  performAction() {
    alert('hehe');
  }
}
