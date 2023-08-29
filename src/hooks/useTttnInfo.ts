import axios from 'axios';
import {useState} from 'react';
import {NP_API_KEY, NP_BASE_URL} from '@env';
import {ResponseTracking} from '../types';

const createFetchParams = (ttn: string) => ({
  apiKey: NP_API_KEY,
  modelName: 'TrackingDocument',
  calledMethod: 'getStatusDocuments',
  methodProperties: {
    Documents: [
      {
        DocumentNumber: ttn,
      },
    ],
  },
});

const TTN_REGEXP = /[^0-9]/g;

export const useTtnInfo = () => {
  const [ttn, setTtn] = useState<string>('');
  const [ttnInfo, setTtnInfo] = useState<ResponseTracking | null>(null);
  const handleGetTtnInfo = async () => {
    const fetchParams = createFetchParams(ttn);
    try {
      const {data: res} = await axios.post(NP_BASE_URL, fetchParams);

      console.log(res);
      setTtnInfo({
        DocumentCost: res.data[0].DocumentCost,
        CargoDescriptionString: res.data[0].CargoDescriptionString,
        Status: res.data[0].Status,
        WarehouseSender: res.data[0].WarehouseSender,
        WarehouseRecipient: res.data[0].WarehouseRecipient,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeTtn = (ttn: string) => setTtn(ttn.replace(TTN_REGEXP, ''));

  return {handleChangeTtn, ttnInfo, ttn, handleSubmit: handleGetTtnInfo};
};
