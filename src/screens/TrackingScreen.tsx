import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useTtnInfo} from '../hooks';
import {TrackingInfo} from '../components';
import {TtnInfoForm} from '../components/TtnInfoForm';

export const TrackingScreen = () => {
  const {ttnInfo, ...inputProps} = useTtnInfo();

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TtnInfoForm {...inputProps} />
        {ttnInfo && <TrackingInfo ttnInfo={ttnInfo} />}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
  },
});
