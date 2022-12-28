import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function IndividualComment() {
  return (
    <View>
        <Text>Title</Text>
        <Text>Body</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

