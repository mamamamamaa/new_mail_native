import {StyleSheet, Text, View} from 'react-native';

export const WelcomeHeading = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Welcome to the New Mail application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    position: 'absolute',
    top: '25%',
    left: '3%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: '#2196F3',
  },
});
