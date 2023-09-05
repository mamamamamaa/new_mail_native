import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const WelcomeHeading: FC = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Welcome to the New Mail application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderStyle: 'solid',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: '#2196F3',
  },
});
