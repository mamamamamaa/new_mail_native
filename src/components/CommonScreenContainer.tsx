import {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';

type Props = {
  children: ReactNode;
  style?: any;
};

export const CommonScreenContainer = ({children, style}: Props) => (
  <View style={style}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  </View>
);
