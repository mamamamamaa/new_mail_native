import {ResponseTracking} from '../types';
import {Text, View} from 'react-native';

type Props = {
  ttnInfo: ResponseTracking;
};

export const TrackingInfo = ({ttnInfo}: Props) => {
  return (
    <View>
      <Text>Ttn info:</Text>
      <Text>Status: {ttnInfo.Status}</Text>
      <Text>Sum: {ttnInfo.DocumentCost} UAH</Text>
      <Text>WarehouseSender: {ttnInfo.WarehouseSender}</Text>
      <Text>WarehouseRecipient: {ttnInfo.WarehouseRecipient}</Text>
      <Text>Description: {ttnInfo.CargoDescriptionString}</Text>
    </View>
  );
};
