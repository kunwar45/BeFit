import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text>GOOB</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 46,
    // left: 112,
    top: 47,
    background: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
