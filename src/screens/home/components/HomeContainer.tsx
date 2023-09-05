import {FC, ReactNode} from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';
import {CommonScreenContainer} from '../../../common/components';

type Props = {
  children: ReactNode;
  marginTop?: DimensionValue;
  extraComponent?: FC;
};

export const HomeContainer: FC<Props> = ({
  children,
  extraComponent: Component,
}) => (
  <CommonScreenContainer style={styles.mainContainer}>
    {Component && <Component />}
    <View style={styles.container}>{children}</View>
  </CommonScreenContainer>
);

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
