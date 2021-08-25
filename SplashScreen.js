import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class SplashScreen extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('HomeScreen');
    }
  }

  handleQuickShare = () => {
      return Alert.alert("Add quick share");
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DOTS</Text>
        <Text style={styles.text}>LET'S CONNECT!</Text>
        <View>
          <TouchableOpacity onPress={this.handleQuickShare} style={styles.quickshare}>
            <Text style={styles.quicksharetext}>Quick Share</Text>
          </TouchableOpacity>
        </View>
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
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  quickshare: {
    marginTop: '50%',
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quicksharetext: {
    color: 'purple',
  }
});
