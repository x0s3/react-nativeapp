import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { nombre, localidad, entidades, nif, edad, medicacion } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <List>
          <ListItem
            title="Localidad"
            rightTitle={localidad}
            hideChevron
          />
          <ListItem
            title="NIF"
            rightTitle={nif}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Edad"
            rightTitle={edad}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Entidades"
            rightTitle={entidades}
            hideChevron
          />
          <ListItem
            title="Medicación"
            rightTitle={medicacion}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
