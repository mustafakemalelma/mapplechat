import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppStackParamList} from "./routeTypes";

import Auth from "./Auth";
import Chat from "./Chat";

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="Chat" component={Chat} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
