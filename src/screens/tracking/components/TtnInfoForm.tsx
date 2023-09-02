import {Button, StyleSheet, Text, View} from 'react-native';
import {FormField} from '../../../common/components';
import {FC} from 'react';

type Props = {
  error: string | null;
  warning: string | null;
  ttn: string;
  phoneNumber: string;
  handleChangeTtn: (ttn: string) => void;
  handleChangePhoneNumber: (number: string) => void;
  handleSubmit: () => Promise<void>;
};

export const TtnInfoForm: FC<Props> = ({
  ttn,
  handleChangeTtn,
  handleSubmit,
  handleChangePhoneNumber,
  phoneNumber,
  error,
  warning,
}) => (
  <View style={styles.formContainer}>
    <View style={styles.inputsContainer}>
      {error && <Text style={styles.errorMessage}>Error: {error}</Text>}
      {warning && <Text style={styles.warningMessage}>Warning: {warning}</Text>}

      <FormField
        title="TTN number:"
        maxLength={14}
        value={ttn}
        onChange={handleChangeTtn}
        placeholder="20000000000000"
        keyboardType="numeric"
      />
      <FormField
        title="Phone number:"
        maxLength={12}
        value={phoneNumber}
        onChange={handleChangePhoneNumber}
        placeholder="380123456789"
        keyboardType="phone-pad"
      />
    </View>
    <Button title="Get Ttn Info" onPress={handleSubmit} />
  </View>
);

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
});
