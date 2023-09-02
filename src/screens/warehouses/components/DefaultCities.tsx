import {Text} from 'react-native';
import {FC} from 'react';

type Props = {
  cities: string[];
};

export const DefaultCities: FC<Props> = ({cities}) => {
  return <Text>Hello</Text>;
};
