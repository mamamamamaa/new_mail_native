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
    marginVertical: 10,
    marginHorizontal: 5,
  },
  heading: {
    textAlign: 'center',
  },
});
