import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { news } from '../config/data';

class Noticias extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
      busqueda:"",
      noticiasList: ds.cloneWithRows(news),
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){
    this.setState({
      busqueda:e
    });
    const newData = news.filter((item)=>{
      const creadorData = item.creador.toUpperCase();
      const mensajeData = this.state.busqueda.toUpperCase();
      return creadorData.indexOf(mensajeData) > -1;
    });
    this.setState({
      noticiasList:this.state.noticiasList.cloneWithRows(newData)
    });
  }

  onLearnMore = (news) => {
    this.props.navigation.navigate('Details', { ...news });
  };

  render() {
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          onChangeText={this.handleSearch}
          placeholder='Buscar una noticia por nombre...' />
        <ListView
          dataSource={this.state.noticiasList}
          renderRow={(rowData)=>
            <ListItem
              key={rowData.creador}
              roundAvatar
              avatar={{ uri: "http://www.parroquiatorrelodones.com/wp-content/uploads/2015/05/C%C3%81RITAS-logo.jpg" }}
              title={`${rowData.titulo.toUpperCase()} ${rowData.creador.toUpperCase()}`}
              subtitle={rowData.fecha}
              onPress={() => this.onLearnMore(rowData)}
            />
          }
        />
      </ScrollView>
    );
  }
}

export default Noticias;
