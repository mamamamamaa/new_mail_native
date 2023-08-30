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
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [ttnInfo, setTtnInfo] = useState<ResponseTracking | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChangePhoneNumber = (number: string) => setPhoneNumber(number);

  const handleChangeTtn = (ttn: string) => setTtn(ttn.replace(TTN_REGEXP, ''));

  const handleGetTtnInfo = async () => {
    const fetchParams = createFetchParams(ttn);

    if (!ttn.trim()) return setError('Ttn number required!!');

    try {
      const {data: res} = await axios.post(NP_BASE_URL, fetchParams);

      if (res.errors.length > 0) return setError(res.errors[0]);

      setTtnInfo({
        DocumentCost: res.data[0].DocumentCost,
        CargoDescriptionString: res.data[0].CargoDescriptionString,
        Status: res.data[0].Status,
        WarehouseSender: res.data[0].WarehouseSender,
        WarehouseRecipient: res.data[0].WarehouseRecipient,
      });
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return {
    ttn,
    error,
    ttnInfo,
    phoneNumber,
    handleChangeTtn,
    handleChangePhoneNumber,
    handleSubmit: handleGetTtnInfo,
  };
};
