import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../models/housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = -1;
  service: HousingService = inject(HousingService);
  housingDto: HousingLocation | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    // this.service.getHousingLocationById(housingLocationId).then(housingLocation => {
    //   this.housingDto = housingLocation;
    // });

    this.housingDto = this.service.getHousingLocationById(housingLocationId);
    console.log(this.housingDto);
    
    // if (this.housingDto === undefined) {
    //   // Navigate to page 404
    //   this.router.navigate(['404']);
    // }
  }

}
