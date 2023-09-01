import axios from 'axios';
import {useState} from 'react';
import {NP_API_KEY, NP_BASE_URL} from '@env';
import {ResponseWarehouses} from '../types';

const createFetchBody = (city: string) => ({
  apiKey: NP_API_KEY,
  modelName: 'Address',
  calledMethod: 'getWarehouses',
  methodProperties: {
    CityName: city,
  },
});

export const useWarehouses = () => {
  const [city, setCity] = useState<string>('');
  const [warehousesDescription, setWarehousesDescription] =
    useState<ResponseWarehouses | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeCity = (city: string) => setCity(city.trim());

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    if (!city) {
      setLoading(false);
      return setError('City name is required!!');
    }

    const fetchBody = createFetchBody(city);

    try {
      const {data: res} = await axios.post(NP_BASE_URL, fetchBody);

      if (!res.success) {
        setLoading(false);
        return setError(res.errors[0]);
      }

      const descriptions = res.data.map(
        (warehouse: any) => warehouse.Description,
      );

      setWarehousesDescription(descriptions);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return {
    city,
    warehousesDescription,
    error,
    loading,
    handleSubmit,
    handleChangeCity,
  };
};
