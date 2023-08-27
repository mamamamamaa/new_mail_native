import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useTtnInfo} from '../hooks/useTttnInfo';

export const TrackingScreen = () => {
  const {ttn, ttnInfo, handleChangeTtn} = useTtnInfo();

  return (
    <View>
      <TextInput
        style={inputStyles.input}
        value={ttn}
        onChangeText={handleChangeTtn}
        onSubmitEditing={() => console.log(ttn)}
        placeholder="TTN"
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  input: {},
});
