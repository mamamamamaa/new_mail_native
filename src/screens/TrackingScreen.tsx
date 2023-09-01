import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useTtnInfo} from '../hooks';
import {Loader, TrackingInfo, TtnInfoForm} from '../components';

export const TrackingScreen = () => {
  const {ttnInfo, loading, ...inputProps} = useTtnInfo();
  // 20450766702783

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Loader visible={loading} />

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
