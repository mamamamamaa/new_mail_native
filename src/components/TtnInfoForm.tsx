import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  error: string | null;
  ttn: string;
  phoneNumber: string;
  handleChangeTtn: (ttn: string) => void;
  handleChangePhoneNumber: (number: string) => void;
  handleSubmit: () => Promise<void>;
};

export const TtnInfoForm = ({
  ttn,
  handleChangeTtn,
  handleSubmit,
  handleChangePhoneNumber,
  phoneNumber,
  error,
}: Props) => (
  <View>
    <View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <TextInput
        style={styles.input}
        value={ttn}
        onChangeText={handleChangeTtn}
        placeholder="TTN"
        placeholderTextColor="white"
        cursorColor="white"
        keyboardType="numeric"
        maxLength={14}
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={handleChangePhoneNumber}
        placeholder="Phone Number"
        placeholderTextColor="white"
        cursorColor="white"
        keyboardType="phone-pad"
        maxLength={13}
      />
    </View>
    <Button title="Get Ttn Info" onPress={handleSubmit} />
  </View>
);

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  input: {
    height: 50,
    backgroundColor: '#2196F3',
    color: 'white',
    padding: 10,
    marginBottom: 20,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'gray',
  },
});
