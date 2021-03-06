import React from 'react';
import {Image} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Voluntarios from '../screens/Voluntarios';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Perfil from '../screens/Perfil';
import Noticias from '../screens/Noticias';
import Usuarios from '../screens/Usuarios';
import NewDetail from '../screens/NewDetail';
import VoluntarioDetail from '../screens/VoluntarioDetail';

export const VoluntariosStack = StackNavigator({
  Voluntarios: {
    screen: Voluntarios,
    navigationOptions: {
      title: 'Voluntarios',
    },
  },

  Details: {
    screen: VoluntarioDetail,
    navigationOptions: {
      title: ({ state }) => `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`
    },
  },
});

export const NoticiasStack = StackNavigator({
  Noticias: {
    screen: Noticias,
    navigationOptions: {
      title: 'Noticias recientes',
    },
  },

  Details: {
    screen: NewDetail,
    navigationOptions: {
      title:({state})=>`${state.params.titulo.toUpperCase()}`
    },
  },
});

export const UsuariosStack = StackNavigator({
  Usuarios: {
    screen: Usuarios,
    navigationOptions: {
      title: 'Usuarios',
    },
  },

  Details: {
    screen:UserDetail,
    navigationOptions: {
      title:({state})=>`${state.params.nombre.toUpperCase()}`
    }
  }
});

export const Tabs = TabNavigator({
  Voluntarios: {
    screen: VoluntariosStack,
    navigationOptions: {
      tabBar: {
        label: <Image source={require('../iconos/teamwork.png')}/>,
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },

  Usuarios: {
    screen: UsuariosStack,
    navigationOptions: {
      tabBar: {
        label: <Image source={require('../iconos/charity.png')}/>,
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },

  Perfil: {
    screen: Perfil,
    navigationOptions: {
      tabBar: {
        label: <Image source={require('../iconos/user.png')}/>,
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },

  Noticias: {
    screen: NoticiasStack,
    navigationOptions: {
      tabBar: {
        label: <Image source={require('../iconos/newspaper.png')}/>,
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Opciones',
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
