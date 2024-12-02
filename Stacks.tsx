import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "./src/components/profile/ProfilePage";
import Phone from "./src/components/login/Phone";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/components/login/Login";
import Homepage from "./src/components/homepage/Homepage";
import Explore from "./src/components/explore/Explore";
import Prefrence from "./src/components/prefrence/Prefrence";
import ChatList from "./src/components/chat/ChatList";
import Chat from "./src/components/chat/Chat";
import { useAuth } from "./src/utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { primaryAccentColor } from "./src/utils/colors";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import LoadingComponent from "./src/components/globalComponents/LoadingComponent";
import FeedPage from "./src/components/homepage/FeedPage";
import PostCarosel from "./src/components/homepage/PostCarosel";
import PostReel from "./src/components/homepage/PostReel copy";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: primaryAccentColor,
        // animation: 'shift',
      }}
    >
      <Tab.Screen
        name="home"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="prefrence"
        component={Prefrence}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="chats"
        component={ChatList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="message" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          ),
        }}
      />
      
     
      

      <Tab.Screen
        name="profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stacks = () => {
  const [loading, setLoading] = React.useState(true);
  const { currentUser, login } = useAuth();

  const getcurrentUser = async () => {
    setLoading(true);
    try {
      const jsonValue = await AsyncStorage.getItem("currentUser");
      const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null; // Parse JSON
      if (parsedValue) {
        console.log(parsedValue);
        login("", {
          id: parsedValue.id,
          username: parsedValue.username,
          avatar: parsedValue.avatar,
          nickName: parsedValue.nickName,
          email: parsedValue.email,
        });
        
      }
    } catch (e) {
      console.error("Error reading AsyncStorage", e); // Handle errors properly
    }
    setLoading(false);
    console.log("Done.");
  };

  useEffect(() => {
    getcurrentUser();
  }, []);

  return (
    <LoadingComponent loading={loading}>

    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser && currentUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={ProfilePage}
            options={
              {
                // animation: "slide_from_right",
              }
            }
          />
          <Stack.Screen
            name="chat"
            component={Chat}
            options={{
              animation: "slide_from_right",
            }}
          />
 <Stack.Screen name="postcarosel" component={PostCarosel} />
        </>
      ) : (
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            animation: "slide_from_right",
          }}
        />
      )}
    </Stack.Navigator>
    </LoadingComponent>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
