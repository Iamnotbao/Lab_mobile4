import 'react-native-gesture-handler';
import React from 'react';
import Contact from './src/Contact';
import Store from './src/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator;
//bbbb
function ContactScreens() {
    return (
        <Stack.Navigator
            initalRouteName="Contact"
            screenOptions={
                {
                    headerShown: true
                }
            }>
            <Stack.Screen name='Contact'
                components={Contact}
                options={{ title: "Contact" }} />
        </Stack.Navigator>
    );
};
function FavoriteScreens() {
    return (
        <Stack.Navigator
            initalRouteName="Favorites"
            screenOptions={
                {
                    headerShown: true
                }
            }>
            <Stack.Screen name='Favorites'
                components={Favorites}
                options={{ title: "Favorites" }} />
            <Stack.Screen
                name='ProfileContact'
                components={ProfileContact}
                options={{ title: "Profile contact" }} />
        </Stack.Navigator>
    );
};
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            initalRouteName='ContactScreens'
            barStyle={{ backgroundColor: "blue" }}
            labeled={false}
            activeintColor={"greyLight"}
            inactiveColor={"greyDarl"}>
            <Tab.Screen name="Contact"
                components={ContactScreens}
                options={{
                    tabBarIcon: 'format-list-bulleted',
                }} />
            <Tab.Screen name="Favorites"
                components={FavoriteScreens}
                options={{ tabBarIcon: 'star-check' }} />
        </Tab.Navigator>
    );
};
const App_Run = () => {
    return(
        <Provider store={Store}>
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
        </Provider>
    );
};
export default App_Run;