import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Voluntarios from '../screens/Voluntarios';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Noticias from '../screens/Noticias';

export const VoluntariosStack = StackNavigator({
  Voluntarios: {
    screen: Voluntarios,
    navigationOptions: {
      title: 'Voluntarios',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: {
      title: ({ state }) => `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`
    },
  },
});

export const Tabs = TabNavigator({
  Voluntarios: {
    screen: VoluntariosStack,
    navigationOptions: {
      tabBar: {
        label: 'Voluntarios',
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: 'Clientes',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
  Noticias: {
    screen: Noticias,
    navigationOptions: {
      tabBar: {
        label: 'Noticias',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
