import {StyleSheet, TextInput} from 'react-native';
import {useTtnInfo} from '../hooks';
import {ScreenContainer} from '../components';

export const TrackingScreen = () => {
  const {ttn, handleChangeTtn} = useTtnInfo();

  return (
    <ScreenContainer>
      <TextInput
        style={styles.input}
        value={ttn}
        onChangeText={handleChangeTtn}
        onSubmitEditing={() => console.log(ttn)}
        placeholder="TTN"
        placeholderTextColor="white"
        cursorColor="white"
        keyboardType="numeric"
        maxLength={14}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'gray',
  },
});
