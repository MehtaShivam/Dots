import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity, Image, FlatList} from 'react-native';


export default class FriendsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
          account: 'First Account',
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
          account: 'Second Account',
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
          account: 'Third Account',
        },
        {
          id: "58694a0f-3fcommanda1-471f-bd96-145571e29d72",
          title: "Fourth Item",
          account: 'Fourth Account',
        },
      ],
    }
  }

  renderLogo = ({ item }) => {
    const backgroundColor = "#f9c2ff";
    const color = 'white';

    return (
      <View style={{flexDirection: 'row', margin: '3%' }}>
        <View style={styles.logo}>
          <Image source={require("./assets/favicon.png")}/>
        </View>
        <View style={{ width: '69%'}}>
          <TouchableOpacity onPress={() => Alert.alert('handle copy link')} style={styles.account}>
            <Text>{item.account}</Text>
          </TouchableOpacity>
        </View>
      </View>
      // <Logo
      //   item={item}
      //   onPress={() => Alert.alert('handle copy link')}
      //   backgroundColor={{ backgroundColor }}
      //   textColor={{ color }}
      // />
      );
    };

    // const Logo = ({ item, onPress, backgroundColor, textColor }) => (
    //
    // );

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.coverphoto}>
          <Image source={require("./assets/favicon.png")}/>
        </View>
        <View style={styles.alignprofile}>
          <Image source={require("./assets/favicon.png")}/>
        </View>
        <View style={styles.list}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderLogo}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  alignprofile: {
    flexDirection: 'row',
    marginTop: '35%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  coverphoto: {
    backgroundColor: '#859a9b',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '25%',
    position: 'absolute',
  },
  sharebutton: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  editbutton: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,

  },
  justifyRight: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    marginTop: '45%',
  },
  list: {
    flexDirection: 'column',
    marginTop: '69%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
  },
  item: {
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 32,
  },
  logo: {
    backgroundColor: '#f9c2ff',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  account: {
    backgroundColor: '#f9c2ff',
    height: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountinput: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
