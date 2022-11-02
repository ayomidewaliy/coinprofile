import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
