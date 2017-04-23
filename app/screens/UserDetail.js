import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Teléfono"
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Nombre"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Cumpleaños"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="Ciudad"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
