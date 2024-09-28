import { PreferenceSegment } from './preference-segment';

export interface CustomerPreference<
  Segment extends PreferenceSegment,
  Choice extends string
> {
  name: Choice;
  segment: Segment;
}
