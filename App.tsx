import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Stacks from "./Stacks";
// import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/utils/Auth";
import { Text, View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stacks />
      </AuthProvider>
    </NavigationContainer>
  );
}






