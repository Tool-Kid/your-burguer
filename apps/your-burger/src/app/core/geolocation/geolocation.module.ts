import { ModuleWithProviders, NgModule } from '@angular/core';
import { GeolocationService } from './domain/geolocation.service';
import { NavigatorGeolocationService } from './infra/navigator-geolocation.service';

@NgModule()
export class GeolocationModule {
  static forRoot(): ModuleWithProviders<GeolocationModule> {
    return {
      ngModule: GeolocationModule,
      providers: [
        { provide: GeolocationService, useClass: NavigatorGeolocationService },
      ],
    };
  }
}
