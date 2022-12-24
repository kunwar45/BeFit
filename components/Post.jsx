import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.text}>Post</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});

/**
 * /* Rectangle 1 

box-sizing: border-box;

position: absolute;
width: 348px;
height: 383px;
left: 21px;
top: 109px;

background: #303144;
border: 2px solid #FFFFFF;
border-radius: 15px;

 */
