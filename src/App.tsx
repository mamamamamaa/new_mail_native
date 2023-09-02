import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './common/types';
import {HomeScreen, TrackingScreen, WarehousesScreen} from './screens';

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
          name="Warehouses"
          options={{title: 'Find Warehouses'}}
          component={WarehousesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
