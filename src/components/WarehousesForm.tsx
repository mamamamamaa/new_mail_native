import {Button, StyleSheet, Text, View} from 'react-native';
import {FormField} from './FormField';

type Props = {
  error: string | null;
  city: string;
  handleChangeCity: (city: string) => void;
  handleSubmit: () => Promise<void>;
};

export const WarehousesForm = ({
  handleChangeCity,
  handleSubmit,
  city,
  error,
}: Props) => (
  <View style={styles.formContainer}>
    <View style={styles.inputContainer}>
      {error && <Text style={styles.errorMessage}>Error: {error}</Text>}
      <FormField
        title="City:"
        value={city}
        onChange={handleChangeCity}
        placeholder="Obligatory in Ukrainian: Київ"
      />
    </View>
    <Button title="Get Warehouses" onPress={handleSubmit} />
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
  inputContainer: {
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
});
