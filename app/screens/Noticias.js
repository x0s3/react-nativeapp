import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { news } from '../config/data';

class Noticias extends Component {
  /*onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };*/

  render() {
    return (
      <ScrollView>
        <List>
          {news.map((currentNew,index) => (
            <ListItem
              key={index}
              roundAvatar
              avatar={{ uri: "http://www.parroquiatorrelodones.com/wp-content/uploads/2015/05/C%C3%81RITAS-logo.jpg" }}
              title={`${currentNew.titulo.toUpperCase()} ${currentNew.creador.toUpperCase()}`}
              subtitle={currentNew.fecha}
              /*onPress={() => this.onLearnMore(currentNew)}*/
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Noticias;
