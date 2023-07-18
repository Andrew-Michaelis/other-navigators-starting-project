import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    // Drawer Code -----------------------------------------------------------------
    // <NavigationContainer>
    //   <Drawer.Navigator screenOptions={{
    //     headerStyle: {backgroundColor: '#BADA55'},
    //     headerTintColor: 'darkgreen',
    //     drawerActiveBackgroundColor: '#BADA55',
    //     drawerActiveTintColor: 'darkslategrey',
    //     drawerStyle: {backgroundColor: 'beige'},
    //   }}>
    //     <Drawer.Screen 
    //       name='Welcome' 
    //       component={WelcomeScreen} 
    //       options={{
    //         drawerLabel: 'Welcome Screen',
    //         drawerIcon: ({color, size}) => (
    //           <Ionicons name='home' color={color} size={size} />
    //         )
    //       }} 
    //     />
    //     <Drawer.Screen 
    //       name='User' 
    //       component={UserScreen} 
    //       options={{
    //         drawerIcon: ({color, size}) => (
    //           <Ionicons name='person' color={color} size={size} />
    //         )
    //       }} 
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    // Drawer Code Ends ------------------------------------------------------------
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#BADA55'},
        headerTintColor: 'darkgreen',
        tabBarActiveTintColor: 'darkslategrey',
        tabBarStyle: {backgroundColor: 'beige'},
      }}>
        <BottomTab.Screen 
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='home' color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen 
          name='User'
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='person' color={color} size={size} />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
