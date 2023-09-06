import {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ResponseWarehouses} from '../types';

type Props = {
  warehousesDescription: ResponseWarehouses;
};

export const WarehousesList: FC<Props> = ({warehousesDescription}) => (
  <View style={styles.warehousesDescriptionContainer}>
    <FlatList
      style={styles.list}
      data={warehousesDescription}
      renderItem={({item, index}) => (
        <Text key={index} style={styles.listItem}>
          {item.Description}
        </Text>
      )}
      keyExtractor={item => item.SiteKey}
    />
  </View>
);

const styles = StyleSheet.create({
  warehousesDescriptionContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    margin: 10,
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height: '50%',
  },

  listItem: {
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
