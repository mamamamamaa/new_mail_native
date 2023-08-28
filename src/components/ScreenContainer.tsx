import {ReactNode} from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';

type Props = {
  children: ReactNode;
  marginTop?: DimensionValue;
  extraComponent?: () => JSX.Element;
};

export const ScreenContainer = ({
  children,
  marginTop = '70%',
  extraComponent: Component,
}: Props) => (
  <View style={styles.mainContainer}>
    {Component && <Component />}
    <View style={{...styles.container, marginTop}}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
  },
  heading: {
    textAlign: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 20,
  },
});
