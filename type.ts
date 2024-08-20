// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Define types for your stack navigator
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  LoginUser:undefined;
};

// Define types for your tab navigator
export type MainTabParamList = {
  Home: undefined;
  News: undefined;
  You: undefined;
};

// Type for the AuthStack Navigator's navigation prop
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

// Type for the MainTab Navigator's navigation prop
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
