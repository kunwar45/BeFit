import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostThumbnail from './PostThumbnail';

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <PostThumbnail imgSrc='assets/images/pushups.jpg'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    boxSizing: 'borderBox',
    width: 348,
    height: 383,
    backgroundColor: '#303144',
    
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,

    top: 109,
    marginBottom: 30,
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
