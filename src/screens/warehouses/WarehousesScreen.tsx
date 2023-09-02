import {WarehousesForm, WarehousesList} from './components';
import {useWarehouses} from './hooks';
import {CommonScreenContainer, Loader} from '../../common/components';

export const WarehousesScreen = () => {
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
