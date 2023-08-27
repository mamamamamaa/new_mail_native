import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DepartmentScreen} from './screens/DepartmentScreen';
import {TrackingScreen} from './screens/TrackingScreen';

type RootStackParamList = {
  Department: undefined;
  Ttn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ttn" component={TrackingScreen} />
        <Stack.Screen name="Department" component={DepartmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
