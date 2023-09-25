export default interface IApartments {
  id?: number;
  name?: string ;
  address?: string;
  sum?: number;
  isPets?: boolean;
  isKitchen?: boolean;
  isWifi?: boolean;
  bed?: number;
  bedroom?: number;
  coords?: string;
  adults?: number;
  child?: number;
  freeRooms?: number;
  allRooms?: number;
  roomClass?: string;
  distanceFromCenter?: string;
  description?: string;
  images?: IApartmentsImage[];
  hasWashingMachine?: number;
  apartmentLocation?: string;
  l1?: number;
  l2?: number;
  complexDescription?: string;
  wiFiName?: number;
  wiFiPwd?: number;
  checkIn?: string;
  checkOut?: string;
  floor?: number;
  hasFreeRooms?: boolean;
}

export interface IApartmentsImage {
  path: string;
}
