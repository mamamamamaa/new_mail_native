import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DEFAULT_CITIES} from '../constants';

type Props = {
  cities?: string[];
  handleChangeCity: (city: string) => void;
};

export const DefaultCities: FC<Props> = ({
  cities = DEFAULT_CITIES,
  handleChangeCity,
}) => (
  <View style={styles.blockContainer}>
    <Text style={styles.blockHeading}>Pick cities:</Text>
    <View style={styles.citiesContainer}>
      {cities.map((city, idx) => (
        <Text
          key={idx}
          onPress={() => handleChangeCity(city)}
          style={styles.cityPicker}>
          &gt; {city}
        </Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  blockContainer: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    paddingVertical: 5,
  },
  blockHeading: {
    fontSize: 18,
  },
  citiesContainer: {
    paddingLeft: 10,
  },
  cityPicker: {
    fontWeight: '500',
    fontSize: 20,
  },
});
