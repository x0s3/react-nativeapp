import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Editar correo"
          />
          <ListItem
            title="Editar número de teléfono"
          />
        </List>
        <List>
          <ListItem
            title="Salir de la sessión"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
