import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreen'
import GaleryScreen from '../screens/GaleryScreen'


const Stack = createStackNavigator(); 

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="MainScreen" component={MainScreen}/>
                <Stack.Screen name="GaleryScreen" component={GaleryScreen}/>
            </Stack.Navigator>
    )
}

export default AppNavigator; 