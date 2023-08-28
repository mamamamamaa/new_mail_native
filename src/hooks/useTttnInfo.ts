import axios from 'axios';
import {NP_API_KEY, NP_BASE_URL} from '@env';
import {useState} from 'react';

type ResponseTracking = {
  Status: string;
  WarehouseSender: string;
  WarehouseRecipient: string;
  Number: string;
};

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
      const {data} = await axios.post<ResponseTracking>(
        NP_BASE_URL,
        fetchParams,
      );
      setTtnInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeTtn = (ttn: string) => setTtn(ttn.replace(TTN_REGEXP, ''));

  return {handleChangeTtn, ttnInfo, ttn, handleSubmit: handleGetTtnInfo};
};
