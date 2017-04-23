//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Usuarios extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Próximamente disponible :D</Text>
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
        backgroundColor: '#2c3e50',
    },
    titulo: {
        fontSize:20,
        color:'orange'
    }
});

//make this component available to the app
export default Usuarios;
