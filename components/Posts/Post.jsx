import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileBox from '../Profiles/ProfileBox';
import PostThumbnail from './PostThumbnail';

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <PostThumbnail imgSrc='assets/images/pushups.jpg'/>
      <ProfileBox></ProfileBox>
      <StatusBar style="auto" />
      <Text style={styles.text}>Comments...</Text>
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
    top: 290,
    left: 10,
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
