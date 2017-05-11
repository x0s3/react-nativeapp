import React, { Component } from 'react';
import { ScrollView,Text,StyleSheet } from 'react-native';
import { Tile, List } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { titulo, creador, fecha, localidad,mensaje } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Text>{`Autor de la noticia: ${creador}`}</Text>
        <Text>{`Publicado en: ${fecha}`}</Text>
        <Text>{`Localidad: ${localidad}`}</Text>
        <Text style={styles.mensaje}>{mensaje}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    mensaje:{
        fontSize:20,
        color:'black'
    }
});

export default UserDetail;
