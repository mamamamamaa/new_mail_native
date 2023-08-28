import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, View} from 'react-native';
import {ScreenContainer, WelcomeHeading} from '../components';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <ScreenContainer marginTop="160%" extraComponent={WelcomeHeading}>
      <View style={styles.buttonContainer}>
        <Button
          title="To Tracking screen"
          onPress={() => navigation.navigate('Tracking')}
        />
        <Button
          title="To Department screen"
          onPress={() => navigation.navigate('Department')}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
