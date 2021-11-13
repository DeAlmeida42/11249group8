import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput, Touchable, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Camera} from 'expo-camera'
import MapView, { AnimatedRegion, MarkerAnimated, Polyline } from 'react-native-maps';





function MapScreen( { navigation }) {
  const state = null;

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        showsUserLocation
        followsUserLocation
        loadingEnabled
        onUserLocationChange={e => console.log(e.nativeEvent.coordinate.latitude)}
      >
      <TouchableOpacity style={[styles.bubble, styles.distanceButton]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat("1.234").toFixed(2)} km
          </Text>
      </TouchableOpacity>
      </MapView>
    </View>
  );
}

function CameraScreen( { navigation }) {

  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [camera, setCamera] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back); React.useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');})();
  }, []);const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'4:3'} />
      </View>
      <Button
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
        </Button>
       <Button title="Take Picture" onPress={() => takePicture()} />
        {image && <Image source={{uri: image}} style={{flex:1}}/>}

   </View>
  );
}

function StartScreen({ navigation }) {
  const [Username, onChangeText] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Username}
        placeholder="Enter Username:"
      />
      <TextInput
      secureTextEntry= {true}
        style={styles.input}
        onChangeText={onChangePassword}
        value={Password}
        placeholder="Enter Password"
      />
      <Button
        title = "Sign in"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
        />
      
      <Button
        title="Milestones/Challenges"
        onPress={() => navigation.navigate('Milestones')} />
      
      <Button 
        title="Camera Detection"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Map"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function MilestonesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Milestones/Challenges Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer> 
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(174, 253, 153)'
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name = "CFarer"
          component={StartScreen}
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'CFarer'
          }} 
        />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen}
        />
        <Stack.Screen 
          name="Milestones"
          component={MilestonesScreen}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  distanceButtonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  distanceButton: {
    flexDirection: 'row',
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  }
});