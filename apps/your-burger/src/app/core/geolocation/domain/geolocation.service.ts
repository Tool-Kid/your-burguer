import { Coordinates } from './coordinates';

export abstract class GeolocationService {
  abstract requestLocation(): Promise<Coordinates | null>;
}
