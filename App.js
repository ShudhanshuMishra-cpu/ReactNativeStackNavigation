import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import PageOne from './components/PageOne';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Home' component={Home} style={styles.container} />
  <Stack.Screen name='PageOne' component={PageOne}/>
</Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = (props) =>{
  return(
    <View>
      <Text>home screen</Text>
      <Button title='next' onPress={()=>props.navigation.navigate("PageOne")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 color:"primary",
  },
});
