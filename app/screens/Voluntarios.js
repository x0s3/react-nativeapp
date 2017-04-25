import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ListView,Alert
} from 'react-native';
import { List, ListItem,SearchBar } from 'react-native-elements';
import { users } from '../config/data';

class Voluntarios extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
      busqueda:"",
      voluntariosList:ds.cloneWithRows(users)
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      busqueda:e
    });
    const newData = users.filter((item)=> {
      const nombreData = item.name.first.toUpperCase();
      const busquedaData = e.toUpperCase();
      return nombreData.indexOf(busquedaData) > -1;
    });
    this.setState({
      voluntariosList:this.state.voluntariosList.cloneWithRows(newData)
    });
  }

  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          onChangeText={this.handleSearch}
          placeholder='Buscar un voluntario por su nombre...' />
        <ListView
          dataSource={this.state.voluntariosList}
          renderRow={(rowData)=>
            <ListItem
              key={rowData.login.username}
              roundAvatar
              avatar={{ uri: rowData.picture.thumbnail }}
              title={`${rowData.name.first.toUpperCase()} ${rowData.name.last.toUpperCase()}`}
              subtitle={rowData.email}
              onPress={() => this.onLearnMore(rowData)}
            />
          }
          enableEmptySections={true}
        />
      </ScrollView>
    );
  }
}

export default Voluntarios;
