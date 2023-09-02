import {FC, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';

type Props = {
  children: ReactNode;
  style?: any;
};

export const CommonScreenContainer: FC<Props> = ({children, style}) => (
  <View style={style}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  </View>
);
