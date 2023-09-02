import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../common/types';
import {HomeContainer, WelcomeHeading} from './components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <HomeContainer marginTop="165%" extraComponent={WelcomeHeading}>
      <View style={styles.buttonContainer}>
        <Button
          title="To Tracking screen"
          onPress={() => navigation.navigate('Tracking')}
        />
        <Button
          title="To Warehouses screen"
          onPress={() => navigation.navigate('Warehouses')}
        />
      </View>
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
