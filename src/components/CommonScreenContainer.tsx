import {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

type Props = {
  children: ReactNode;
  style?: any;
};

export const CommonScreenContainer = ({children, style}: Props) => (
  <ScrollView style={style}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  </ScrollView>
);
