import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class SignUpScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
    }
  }

  handleSignUp = () =>  {
      Alert.alert("Add backend authentication, user creation, and validation");
      return this.props.navigation.navigate('NavBar');
  };

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor = 'white'
          onChangeText = {text => this.setState({email: text})}
        />
        <TextInput style={styles.input}
          placeholder="Username"
          placeholderTextColor = 'white'
          onChangeText = {text => this.setState({username: text})}
        />
        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor = 'white'
          secureTextEntry={true}
          onChangeText = {text => this.setState({password: text})}
        />
        <TextInput style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor = 'white'
          secureTextEntry={true}
          onChangeText ={text => this.setState({confirmpassword: text})}
        />
        <Button title="Sign Up" color='white' onPress={this.handleSignUp}>
        Sign Up
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    fontWeight: 'bold',
    color: 'white',
  },

});
