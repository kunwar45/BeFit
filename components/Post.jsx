import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.text}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    boxSizing: 'borderBox',
    width: '90%',
    height: '45%',
    backgroundColor: '#303144',
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    left: 21,
    top: 109,
  },
  text: {
    color: 'white',
  },
});

/**
 * /* Rectangle 1 

box-sizing: border-box;

p
width: 348px;
height: 383px;


background: #303144;
border: 2px solid #FFFFFF;
border-radius: 15px;

 */
