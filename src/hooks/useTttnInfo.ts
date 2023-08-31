import axios from 'axios';
import {useState} from 'react';
import {NP_BASE_URL} from '@env';
import {ResponseTracking} from '../types';
import {createFetchBody} from '../utils';
import {getWarning} from '../utils/getWarning';

const TTN_REGEXP = /[^0-9]/g;

export const useTtnInfo = () => {
  const [ttn, setTtn] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [ttnInfo, setTtnInfo] = useState<ResponseTracking | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  const handleChangePhoneNumber = (number: string) => setPhoneNumber(number);

  const handleChangeTtn = (ttn: string) => setTtn(ttn.replace(TTN_REGEXP, ''));

  const handleGetTtnInfo = async () => {
    setError(null);
    setWarning(null);

    const fetchBody = createFetchBody(ttn, phoneNumber);

    if (!ttn.trim()) {
      return setError('TTN number required!!');
    }

    try {
      const {data: res} = await axios.post(NP_BASE_URL, fetchBody);

      if (res.errors.length > 0) {
        return setError(res.errors[0]);
      }

      if (res.warnings.length > 0) {
        const warning = getWarning(res.warnings, ttn);
        setWarning(warning);
      }

      setTtnInfo({
        DocumentCost: res.data[0].DocumentCost,
        CargoDescriptionString: res.data[0].CargoDescriptionString,
        Status: res.data[0].Status,
        CityRecipient: res.data[0].CityRecipient,
        CitySender: res.data[0].CitySender,
        SenderFullNameEW: res.data[0].SenderFullNameEW,
      });

      console.log(res);
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
    warning,
    phoneNumber,
    handleChangeTtn,
    handleChangePhoneNumber,
    handleSubmit: handleGetTtnInfo,
  };
};
