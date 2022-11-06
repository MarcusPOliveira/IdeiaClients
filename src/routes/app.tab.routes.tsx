import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, UserPlus, UserList } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { NewClient } from '../screens/NewClient';
import { MyClients } from '../screens/MyClients';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {

  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.shape,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          elevation: 10,
          backgroundColor: colors.white,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} weight="fill" color={color} />
          )
        }}
      />
      <Screen
        name="newClient"
        component={NewClient}
        options={{
          tabBarIcon: ({ color }) => (
            <UserPlus size={24} weight="fill" color={color} />
          )
        }}
      />
      <Screen
        name="myClients"
        component={MyClients}
        options={{
          tabBarIcon: ({ color }) => (
            <UserList size={24} weight="fill" color={color} />
          )
        }}
      />
    </Navigator>
  )
}
