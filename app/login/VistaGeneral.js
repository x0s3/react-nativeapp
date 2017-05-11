import React, { Component } from 'react';
import { View, Text, StyleSheet,Navigator } from 'react-native';
import Login from './Login';
import {Root,Tabs} from '../config/router';

class VistaGeneral extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{id:'Login'}}
                renderScene={this.navigatorRenderScene}
            />
        );
    }

    navigatorRenderScene(route,navigator) {
        _navigator = navigator;
        switch(route.id) {
            case 'Login':
                return (<Login navigator={navigator}/>);
            case 'App':
                return (<Root/>);
        }
    }
}

export default VistaGeneral;
