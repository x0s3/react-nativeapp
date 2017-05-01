import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert,Image} from 'react-native';
import {FormLabel, FormInput, Button, FormValidationMessage} from 'react-native-elements';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleLogin = this
            .handleLogin
            .bind(this);
        this.handleEmail = this
            .handleEmail
            .bind(this);
        this.handlePassword = this
            .handlePassword
            .bind(this);
    }

    handleEmail(e) {
        this.setState({email: e});
    }

    handlePassword(e) {
        this.setState({password: e})
    }

    componentWillMount() {
        //aqui vendria la comprobación de la persistencia con realm
        //this.props.navigator.push({id: 'App'});
    }

    handleLogin() {

        if (this.state.email == "xose" && this.state.password == "xose") {
            this.props.navigator.push({id: 'App'});
        } else 
            Alert.alert("Login incorrecto", "Correo o contraseña equivocadas");
        }
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../login/meraki.jpeg')} style={styles.imagen}/>
                <FormLabel>Correo electrónico</FormLabel>
                <FormInput  onChangeText={this.handleEmail}/>
                <FormLabel>Contraseña</FormLabel>
                <FormInput secureTextEntry={true} onChangeText={this.handlePassword}/>
                <Button
                    raised
                    icon={{
                    name: 'home'
                }}
                    backgroundColor={'#ef5c2b'}
                    borderRadius={8}
                    onPress={this.handleLogin}
                    title='Login'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'white'
    },
    imagen: {
    }
});


export default Login;
