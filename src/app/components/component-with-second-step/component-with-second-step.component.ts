import { Component } from '@angular/core';

import { BaseGuideComponent } from '../../helpers/base-guide-component';
import { TourServiceService } from '../../services/tour-service.service';

@Component({
  selector: 'app-component-with-second-step',
  templateUrl: './component-with-second-step.component.html',
  styleUrls: ['./component-with-second-step.component.css']
})
export class ComponentWithSecondStepComponent extends BaseGuideComponent {
  constructor(private tourService: TourServiceService) { super(tourService); }

  performAction() {
    alert('next step');
  }
}
