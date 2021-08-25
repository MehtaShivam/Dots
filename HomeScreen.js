import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSignIn = () => {
    Alert.alert("Add backend authentication");
    return this.props.navigation.navigate('NavBar');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Dots</Text>
        <TextInput style={styles.input}
          placeholder="Username"
          placeholderTextColor = 'white'
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor = 'white'
          secureTextEntry={true}
          onChangeText={text => this.setState({password: text})}
        />
        <Button title="Sign In" color='white' onPress={this.handleSignIn}>
        Sign In
        </Button>
        <Button title="Sign Up" color='white' onPress={()=>{this.props.navigation.navigate('SignUpScreen')}}>
        Sign Up
        </Button>
        <Button title="Forgot Credentials" color='white' onPress={()=>{this.props.navigation.navigate('ForgotCredentials')}}>
        Forgot Password/Username
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
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
