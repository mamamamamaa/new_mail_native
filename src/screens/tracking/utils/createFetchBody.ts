import {NP_API_KEY} from '@env';

export const createFetchBody = (ttn: string, phoneNumber: string) => ({
  apiKey: NP_API_KEY,
  modelName: 'TrackingDocument',
  calledMethod: 'getStatusDocuments',
  methodProperties: {
    Documents: [
      {
        DocumentNumber: ttn,
        Phone: phoneNumber,
      },
    ],
  },
});
