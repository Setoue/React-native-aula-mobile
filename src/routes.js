import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';


const AppStack = createStackNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="First" component={First} />
                <AppStack.Screen name="Second" component={Second} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}


