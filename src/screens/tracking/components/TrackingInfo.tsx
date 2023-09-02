import {StyleSheet, Text, View} from 'react-native';
import {ResponseTracking} from '../types';

type Props = {
  ttnInfo: ResponseTracking;
};

const WARNING_MESSAGE =
  'Send request with phone number to get this information';

export const TrackingInfo = ({ttnInfo}: Props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.heading}>Ttn info:</Text>

      <Text style={styles.field}>
        Status: <Text style={styles.value}>{ttnInfo.Status}</Text>
      </Text>
      <Text style={styles.field}>
        Sum: <Text style={styles.value}>{ttnInfo.DocumentCost} UAH</Text>
      </Text>
      <Text style={styles.field}>
        Sender:{' '}
        <Text style={styles.value}>
          {ttnInfo.SenderFullNameEW || WARNING_MESSAGE}
        </Text>
      </Text>
      <Text style={styles.field}>
        City from: <Text style={styles.value}>{ttnInfo.CitySender}</Text>
      </Text>
      <Text style={styles.field}>
        City to: <Text style={styles.value}>{ttnInfo.CityRecipient}</Text>
      </Text>
      <Text style={styles.field}>
        Description:{' '}
        <Text style={styles.value}>
          {ttnInfo.CargoDescriptionString || WARNING_MESSAGE}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    fontWeight: 'bold',
  },
  value: {
    fontStyle: 'italic',
  },

  infoContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    margin: 10,
  },

  heading: {
    fontSize: 20,
  },
});
