export class DeliveryOption {
  name: string;
  type: DeliveryOptionType;
}

export class InSiteDeliveryOption {}

export class PickUpDeliveryOption {}

export class PartnerDeliveryOpcion {}

export enum DeliveryOptionType {
  IN_SITE = 'IN_SITE',
  PICK_UP = 'PICK_UP',
  DELIVERY = 'DELIVERY',
}
