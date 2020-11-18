import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@app/screens/auth/login";
import ForgotScreen from "@app/screens/auth/forgot";
import HelpScreen from "@app/screens/auth/help";
import SplashScreen from "@app/screens/splash";
import AccountSettingsScreen from "@app/screens/user-account/account-settings";
import EditProfileScreen from "@app/screens/user-account/edit-profile";
import SocialMediaScreen from "@app/screens/user-account/social-media";

import BottomTabNavigator from "./bottom-tab-navigator";

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Home" component={BottomTabNavigator} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Forgot Password" component={ForgotScreen} />
    <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    <Stack.Screen name="Social Media Accounts" component={SocialMediaScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
