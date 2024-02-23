import { Component, Input, input } from '@angular/core';
import { HousingLocation } from '../models/housing-location';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './housing-location.component.html',
    styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation
}
