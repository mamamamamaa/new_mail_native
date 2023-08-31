import {
  Button,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Props = {
  error: string | null;
  warning: string | null;
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
  warning,
}: Props) => {
  const renderInput = (
    title: string,
    value: string,
    onChange: (ttn: string) => void,
    placeholder: string,
    maxLength: number,
    keyboardType?: KeyboardTypeOptions,
  ) => (
    <>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="white"
        cursorColor="white"
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </>
  );

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputsContainer}>
        {error && <Text style={styles.errorMessage}>Error: {error}</Text>}
        {warning && (
          <Text style={styles.warningMessage}>Warning: {warning}</Text>
        )}

        {renderInput(
          'TTN number:',
          ttn,
          handleChangeTtn,
          '20000000000000',
          14,
          'numeric',
        )}
        {renderInput(
          'Phone number:',
          phoneNumber,
          handleChangePhoneNumber,
          '380123456789',
          12,
          'phone-pad',
        )}
      </View>
      <Button title="Get Ttn Info" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 10,
    margin: 10,
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  errorMessage: {
    color: 'red',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  warningMessage: {
    color: '#ffcc00',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: 10,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'gray',
  },
});
