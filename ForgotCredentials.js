import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class ForgotCredentials extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
    }
  }

  handleForgotCredentials = () => {
    Alert.alert("Add forgot credentials backend");
    return this.props.navigation.navigate('HomeScreen');
  };

  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          onChangeText={() => this.setState({email: text})}
          placeholder="Email"
          placeholderTextColor = 'white'
        />
        <Button title="Forgot Credentials" color='white' onPress={this.handleForgotCredentials}>
        Forgot Credentials
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
