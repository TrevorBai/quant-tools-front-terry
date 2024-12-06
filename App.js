import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageWebView from './screens/ManageWebView';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import IconButton from './components/UI/IconButton';
import NewsContextProvider from './store/NewsContext';
import News from './screens/News';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function QuantToolsOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageWebView', {
                webViewUrl: 'https://google.com'
              });
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Home Page',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="News"
        component={News}
        options={{
          title: 'News Page',
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NewsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: 'black' },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name="QuantToolsOverview"
              component={QuantToolsOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageWebView"
              component={ManageWebView}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NewsContextProvider>
    </>
  );
}
