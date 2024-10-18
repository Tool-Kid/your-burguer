import { Coordinates } from '../domain/coordinates';
import { GeolocationService } from '../domain/geolocation.service';

export class NavigatorGeolocationService implements GeolocationService {
  private readonly geolocation = navigator.geolocation;

  requestLocation(): Promise<Coordinates | null> {
    return new Promise((resolve) => {
      this.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({ latitude: coords.latitude, longitude: coords.longitude });
        },
        () => {
          resolve(null);
        }
      );
    });
  }
}
