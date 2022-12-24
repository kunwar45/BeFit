import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GOOB</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    height: 46,
    // left: 112,
    // top: 47,

    // background: "#FFFFFF",
  },
  text: {
    color: 'white',
  },
});