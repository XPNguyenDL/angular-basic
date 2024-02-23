import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../models/housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousingLocationComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    // this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    //   this.housingLocationList = housingLocationList;
    // });
  }

  searchForm = new FormGroup({
    keyword: new FormControl('')
  });

  searchHousingLocation(keyword: string) {
    this.housingLocationList = this.housingService.getHousingLocationByKeyword(keyword ?? '');
    // this.housingService.getHousingLocationByKeyword(keyword ?? '')
    //   .then((housingLocationList: HousingLocation[]) => {
    //     this.housingLocationList = housingLocationList;
    //   });

  }

}
