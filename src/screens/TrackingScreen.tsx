import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useTtnInfo} from '../hooks';
import {TrackingInfo} from '../components';
import {TtnInfoForm} from '../components/TtnInfoForm';

export const TrackingScreen = () => {
  const {ttnInfo, ...inputProps} = useTtnInfo();
  // 20 4507 6670 2002

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TtnInfoForm {...inputProps} />
        {ttnInfo && <TrackingInfo ttnInfo={ttnInfo} />}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
  },
});
