import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import ForgotCredentials from './ForgotCredentials';
import NavBar from './ProfileScreen';
import FriendsScreen from './FriendsScreen';
import SplashScreen from './SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={ {headerShown: false} }
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={ { headerShown: false } }
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={ {title: 'Dots',
                  headerStyle: {
                 backgroundColor: 'purple',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                 fontWeight: 'bold',
                 color: 'white'
                },}
                        }
          />
          <Stack.Screen
            name="ForgotCredentials"
            component={ForgotCredentials}
            options={ {title:'Dots',
                      headerStyle: {
                     backgroundColor: 'purple',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                     fontWeight: 'bold',
                     color: 'white'
                    },} }
          />
          <Stack.Screen
            name="NavBar"
            component={NavBar}
            options={ {headerShown: false} }
          />
          <Stack.Screen
            name="FriendsScreen"
            component={FriendsScreen}
            options={ {title:'Dots',
                      headerStyle: {
                     backgroundColor: 'purple',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                     fontWeight: 'bold',
                     color: 'white'
                    },} }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
