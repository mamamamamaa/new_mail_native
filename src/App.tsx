import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DepartmentScreen, HomeScreen, TrackingScreen} from './screens';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{title: ''}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Tracking"
          options={{title: 'Tracking Info'}}
          component={TrackingScreen}
        />
        <Stack.Screen
          name="Department"
          options={{title: 'Find Department'}}
          component={DepartmentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
