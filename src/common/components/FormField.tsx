import {FC} from 'react';
import {KeyboardTypeOptions, StyleSheet, Text, TextInput} from 'react-native';

type Props = {
  title: string;
  value: string;
  onChange: (ttn: string) => void;
  placeholder: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
};

export const FormField: FC<Props> = ({
  maxLength,
  title,
  keyboardType = 'default',
  value,
  placeholder,
  onChange,
}) => (
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
