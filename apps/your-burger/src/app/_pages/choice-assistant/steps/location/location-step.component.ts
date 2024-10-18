import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationService } from '@core/geolocation/domain/geolocation.service';
import { CustomerPreferencesState } from '@choice-assistant/domain/preference/customer-preferences-state';

@Component({
  selector: 'app-location-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-step.component.html',
  styleUrl: './location-step.component.css',
})
export class LocationStepComponent {
  private readonly geolocationService = inject(GeolocationService);
  private readonly customerPreferencesState = inject(CustomerPreferencesState);

  async requestGeolocation() {
    const coordinates = await this.geolocationService.requestLocation();
    if (!coordinates) {
      return;
    }
    this.customerPreferencesState.setLocation(coordinates);
  }
}
