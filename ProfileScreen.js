import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsScreen from './ContactsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Modal from 'expo-modal';
import MFC, { ByteParser } from 'react-native-mifare-classic-wrapper';
import NativeEventEmitter from 'NativeEventEmitter';

const Tab = createBottomTabNavigator();



function ProfileScreen({route}) {
  const test = route.params.test;
  const [selectedId, setSelectedId] = React.useState(null);
  const [edit, setEdit] = React.useState(true);
  const [gesture, setGesture] = React.useState('');
  const [gestureState, setGestureState] = React.useState('none');
  const [backgroundColor, setBackgroundColor] = React.useState('white');


  const handleCoverPhoto = () => {
    Alert.alert("Add functionality to change cover photo");
  };

  const handleProfilePicture = () => {
    Alert.alert("Add functionality to change profile picture");

  };

  const handleEdit = () => {
    Alert.alert(test);
    Alert.alert("Add functionality to edit button");
    if(edit==false){
      setEdit(true);
    }else{
      setEdit(false);
    }
  };

  const handleShare = () => {
    Alert.alert("Add functionality to share button");
    //listenToNfcEventOnce();
    //readNdef();
  };


  const handleLongPress = () => {
    Alert.alert("Add longpress functionality");
  };

  const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

  const onSwipe = (gestureName, gestureState) => {
      const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
      setGestureState(gestureName);
      switch (gestureName) {
        case SWIPE_LEFT:
          setBackgroundColor('blue');
          break;
        case SWIPE_RIGHT:
          setBackgroundColor('white');
          break;
      }
    }

  const onSwipeLeft = () => {
    setGesture('You swiped left!');
    Alert.alert(gesture);
  };

  const onSwipeRight = () => {
    setGesture('You swiped right!');
    Alert.alert(gesture);
  };

  const renderLogo = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Logo
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
      );
    };

    const Logo = ({ item, onPress, backgroundColor, textColor }) => (
      <View style={{flexDirection: 'row', margin: '3%' }}>
        <TouchableOpacity onPress={onPress} style={[styles.logo, backgroundColor]} disabled={edit}>
          <Image source={require("./assets/favicon.png")}/>
        </TouchableOpacity>
        <View style={{ width: '69%'}}>
          <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            config={config}
            style={{
              flex: 1, backgroundColor: backgroundColor
            }}
          >
            <TouchableOpacity onPress={onPress} onLongPress={handleLongPress} style={styles.account} disabled={edit}>
              <TextInput placeholder={item.account} style={styles.accountinput} disabled={edit}/>
            </TouchableOpacity>
          </GestureRecognizer>
        </View>
      </View>
    );

  const DATA = [
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
      account: 'Quick Add Item',
    },
  ];

  return Modal.wrapIntoModal (
      <View style={styles.container}>
        <View style={styles.container}>
          {this.state.nfcError ? nfcError() : ((this.state.tag && this.state.data) ? tagDetected : noTag)()}
        </View>
        <TouchableOpacity style={styles.coverphotobutton} onPress={handleCoverPhoto} disabled={edit}>
          <Image source={require("./assets/favicon.png")}/>
        </TouchableOpacity>
        <View style={styles.alignbutton}>
          <TouchableOpacity style={styles.profilepicturebutton} onPress={handleProfilePicture} disabled={edit}>
            <Image source={require("./assets/favicon.png")}/>
          </TouchableOpacity>
        </View>
        <View style={styles.justifyRight}>
          <TouchableOpacity style={styles.editbutton} onPress={handleEdit}>
            <Image source={require("./assets/favicon.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sharebutton} onPress={listenToNfcEventOnce}>
            <Image source={require("./assets/favicon.png")}/>
          </TouchableOpacity>
        </View>
          <View style={styles.list}>
            <FlatList
              scrollEnabled={true}
              data={DATA}
              renderItem={renderLogo}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  alignbutton: {
    flexDirection: 'row',
    marginTop: '35%',
    position: 'absolute',
  },
  coverphotobutton: {
    backgroundColor: '#859a9b',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '25%',
    position: 'absolute',
  },
  profilepicturebutton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,

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
    marginTop: '60%',
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

export default class NavBar extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      nfcError: 'Please wait...',
      tag: null,
      data: null
    }
  }

  componentDidMount () {
    const tagFound = async (tag) => {
      await tag.readBlock(48, {
        sector: 12,
        key: [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF],
        keyType: 'A'
      }).then(d => {
        this.setState({ tag: tag.id, data: ByteParser.byteToString(d) })
      })
    }

    MFC.start().then(() => MFC.listen(tagFound))
      .then(this.setState({ nfcError: null }))
      .catch(e => this.setState({ nfcError: e.message }))

    MFC.onStateChanged(({ state }) => {
      if (state === 'on') {
        this.setState({ nfcError: this.state.oldNfcError, tag: null, data: null })
      } else if (state === 'off') {
        this.setState({
          oldNfcError: this.state.nfcError,
          nfcError: 'NFC Disabled!'
        })
      }
    })
  }
  render(){
    const nfcError = () => <Text>{this.state.nfcError}</Text>
    const noTag = () => <Text> Approach a Mifare Classic Tag </Text>
    const tagDetected = () => (
      <View>
        <Text>ID: {this.state.tag}</Text>
        <Text>Data: {this.state.data}</Text>
      </View>
    )
    return(
        <Tab.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
                        tabBarStyle: {
                                backgroundColor: 'purple',
                        },
                      }}
        >
          <Tab.Screen
            name="ContactsScreen"
            component={ContactsScreen}
            options={ { headerShown: false,
                        tabBarLabel: 'Contacts',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="contacts" color='white' size={size} />
                        ), } }
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={ { headerShown: false,
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="head-dots-horizontal" color='white' size={size} />
                        ), } }
           initialParams={{test: 'it works'}}
          />
        </Tab.Navigator>
    );
  }
}
