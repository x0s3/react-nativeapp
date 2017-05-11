import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { clientes } from '../config/data';

class Usuarios extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
      busqueda:"",
      clientesList: ds.cloneWithRows(clientes),
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){
    this.setState({
      busqueda:e
    });
    const newData = clientes.filter((item)=>{
      const creadorData = item.nombre.toUpperCase();
      const mensajeData = e.toUpperCase();
      return creadorData.indexOf(mensajeData) > -1;
    });
    this.setState({
      clientesList:this.state.clientesList.cloneWithRows(newData)
    });
  }

  onLearnMore = (clientes) => {
    this.props.navigation.navigate('Details', { ...clientes });
  };

  render() {
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          onChangeText={this.handleSearch}
          placeholder='Buscar un usuario por nombre...' />
        <ListView
          dataSource={this.state.clientesList}
          renderRow={(rowData)=>
            <ListItem
              key={rowData.nombre}
              title={`${rowData.nombre.toUpperCase()}`}
              subtitle={rowData.localidad}
              onPress={() => this.onLearnMore(rowData)}
            />
          }
          enableEmptySections={true}
        />
      </ScrollView>
    );
  }
}

export default Usuarios;
