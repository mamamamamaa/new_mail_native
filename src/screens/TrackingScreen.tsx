import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {useTtnInfo} from '../hooks';
import {ScreenContainer, TrackingInfo} from '../components';

export const TrackingScreen = () => {
  const {ttn, ttnInfo, handleChangeTtn, handleSubmit} = useTtnInfo();

  // 20 4507 6670 2002

  console.log(ttnInfo?.WarehouseRecipient);
  console.log(ttnInfo?.WarehouseSender);
  console.log(ttnInfo?.Status);
  console.log(ttnInfo?.DocumentCost);
  console.log(ttnInfo?.CargoDescriptionString);

  return (
    <ScreenContainer marginTop="0%">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={styles.input}
          value={ttn}
          onChangeText={handleChangeTtn}
          onSubmitEditing={handleSubmit}
          placeholder="TTN"
          placeholderTextColor="white"
          cursorColor="white"
          keyboardType="numeric"
          maxLength={14}
        />
        {ttnInfo && <TrackingInfo ttnInfo={ttnInfo} />}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: 10,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'gray',
  },
});
