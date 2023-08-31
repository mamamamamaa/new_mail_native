export type ResponseTracking = {
  Status: string;
  DocumentCost: string;
  CargoDescriptionString: string;
  CityRecipient: string;
  CitySender: string;
  SenderFullNameEW: string;
};

export type Warnings = {
  [key: string]: string;
}[];
