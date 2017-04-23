//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Noticias extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Noticias</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c6871c',
    },
});

//make this component available to the app
export default Noticias;
