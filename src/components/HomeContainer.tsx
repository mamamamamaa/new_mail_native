import {ReactNode} from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';
import {CommonScreenContainer} from './CommonScreenContainer';

type Props = {
  children: ReactNode;
  marginTop?: DimensionValue;
  extraComponent?: () => JSX.Element;
};

export const HomeContainer = ({
  children,
  marginTop = '70%',
  extraComponent: Component,
}: Props) => (
  <CommonScreenContainer style={styles.mainContainer}>
    {Component && <Component />}
    <View style={{...styles.container, marginTop}}>{children}</View>
  </CommonScreenContainer>
);

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    height: 100,
  },
  heading: {
    textAlign: 'center',
    height: 100,
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 20,
  },
});