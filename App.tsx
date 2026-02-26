import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BaseInput from "./components/BaseInput";
import { useState } from "react";

const ThemeInput = BaseInput({});

export default function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ThemeInput
        leftIcon={<Text>✅</Text>}
        onChangeText={(text) =>
          setUserData((prev) => ({ ...prev, username: text }))
        }
        label="Username"
        value={userData.username}
        rightIcon={<Text>✅</Text>}
      />
      <ThemeInput
        leftIcon={<Text>✅</Text>}
        rightIcon={<Text>✅</Text>}
        style={{ width: "100%" }}
        label="Password"
        onChangeText={(text) =>
          setUserData((prev) => ({ ...prev, password: text }))
        }
        value={userData.password}
        editable={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
