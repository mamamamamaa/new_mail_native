import {FC} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

type Props = {
  visible: boolean;
};

export const Loader: FC<Props> = ({visible}) => (
  <Modal transparent animationType="none" visible={visible}>
    <View style={styles.backdrop}>
      <ActivityIndicator size="large" color="#2196F3" />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
