import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
        title="Track Bus"
        onPress={() => navigation.navigate('Track Bus')}
        />
      <Button
        title="Milestones/Challenges"
        onPress={() => navigation.navigate('Milestones')} />
    </View>
  );
}
function TrackingScreen({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Tracking Screen</Text>
    </View>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function MilestonesScreen({navigation }) {
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
          name = "Start"
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
          name="Track Bus"
          component={TrackingScreen}
        />
        <Stack.Screen 
          name="Milestones"
          component={MilestonesScreen}
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
  }
});
