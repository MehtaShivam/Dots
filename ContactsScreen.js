import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TextInput, Alert, FlatList, TouchableOpacity, Image } from 'react-native';


export default class ContactsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedId: null,
      search: '',
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
      filteredDataSource: [
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

  searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = this.state.data.filter(
        function (item) {
          const itemData = item.account
            ? item.account.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase().trim();
          return itemData.indexOf(textData) > -1;
        });
      this.setState({filteredDataSource: newData});
      this.setState({search: text});
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({filteredDataSource: this.state.data});
      this.setState({search: text});
    }
  };

  renderLogo = ({ item }) => {
    const backgroundColor = item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === this.state.selectedId ? 'white' : 'black';

    return (
      <View style={{flexDirection: 'row', marginTop: '5%' }}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('FriendsScreen')} style={[styles.logo, backgroundColor]}>
          <Image source={require("./assets/favicon.png")}/>
        </TouchableOpacity>
        <View style={{ width: '69%'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('FriendsScreen')} style={[styles.account, backgroundColor]}>
            <Text style={styles.text}>{item.account}</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    };
    //
    // const Logo = ({ item, onPress, backgroundColor, textColor }) => (
    //   <View style={{flexDirection: 'row', marginTop: '5%' }}>
    //     <TouchableOpacity onPress={onPress} style={[styles.logo, backgroundColor]}>
    //       <Image source={require("./assets/favicon.png")}/>
    //     </TouchableOpacity>
    //     <View style={{ width: '69%'}}>
    //       <TouchableOpacity onPress={onPress} style={[styles.account, backgroundColor]}>
    //         <Text style={styles.text}>{item.account}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // );

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.searchFilterFunction(text)}
            placeholder="Search Here"
          />
        <Text style={styles.text}>Your Dots</Text>
        <FlatList
          data={this.state.filteredDataSource}
          renderItem={this.renderLogo}
          keyExtractor={(item) => item.id}
          extraData={this.state.selectedId}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
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
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '5%'
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
