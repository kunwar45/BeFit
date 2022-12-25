import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostThumbnail from './PostThumbnail';
import Comment from '../Comments/CommentBox';

export default function SinglePost() {
  return (
    <View style={styles.postContainer}>
      <View style={styles.thumbnailContainer}>
        <PostThumbnail/>
      </View>
        <View style={styles.commentContainer}>
        <Comment/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    width: 348,
    height: 663,
    backgroundColor: '#1D1E2C',
    
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,

    top: 109,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  thumbnailContainer: {
    width: "50%",
    height: "32.8%",
    top: 30,
  },
  commentContainer: {
    top: 37,
    width: '100%'
  }
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
