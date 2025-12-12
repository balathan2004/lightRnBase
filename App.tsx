import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationRoot from "./src/routes/NavigationRoot";
import { theme } from "./src/themes/theme";

export default function App() {
  return (
    <Provider theme={theme}>
      <SafeAreaView style={{flex:1}}>
        <NavigationRoot/>
      </SafeAreaView>
    </Provider>
  );
}

