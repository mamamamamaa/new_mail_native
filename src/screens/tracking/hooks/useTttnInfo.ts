import axios from 'axios';
import {useState} from 'react';
import {NP_BASE_URL} from '@env';
import {createFetchBody, getWarning} from '../utils';
import {ResponseTracking} from '../types';

const TTN_REGEXP = /[^0-9]/g;

export const useTtnInfo = () => {
  const [ttn, setTtn] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [ttnInfo, setTtnInfo] = useState<ResponseTracking | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangePhoneNumber = (number: string) => setPhoneNumber(number);

  const handleChangeTtn = (ttn: string) =>
    setTtn(ttn.replace(TTN_REGEXP, '').trim());

  const handleGetTtnInfo = async () => {
    setError(null);
    setWarning(null);
    setLoading(true);

    if (!ttn) {
      setLoading(false);
      return setError('TTN number is required!!');
    }

    const fetchBody = createFetchBody(ttn, phoneNumber);

    try {
      const {data: res} = await axios.post(NP_BASE_URL, fetchBody);

      if (!res.success) {
        setLoading(false);
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
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    ttn,
    error,
    ttnInfo,
    warning,
    loading,
    phoneNumber,
    handleChangeTtn,
    handleChangePhoneNumber,
    handleSubmit: handleGetTtnInfo,
  };
};
