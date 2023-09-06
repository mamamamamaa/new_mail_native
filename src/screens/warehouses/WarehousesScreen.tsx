import {FC} from 'react';
import {CommonScreenContainer, Loader} from '../../common/components';
import {WarehousesForm, WarehousesList} from './components';
import {useWarehouses} from './hooks';

export const WarehousesScreen: FC = () => {
  const {warehousesDescription, loading, ...formProps} = useWarehouses();

  return (
    <CommonScreenContainer>
      <Loader visible={loading} />

      <WarehousesForm {...formProps} />

      {warehousesDescription && (
        <WarehousesList warehousesDescription={warehousesDescription} />
      )}
    </CommonScreenContainer>
  );
};
