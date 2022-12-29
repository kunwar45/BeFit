import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostThumbnail from './PostThumbnail';
import Comment from '../Comments/CommentBox';
import ProfileBox from '../Profiles/ProfileBox';

export default function SinglePost() {
  return (
    <View style={styles.postContainer}>
      <View style={styles.thumbnailContainer}>
        <PostThumbnail/>
        <View style={styles.profileContainer}>
          <ProfileBox/>
        </View>
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
    alignItems: "center",
  },
  profileContainer: {
    top: 160,
  },
  commentContainer: {
    top: 37,
    width: '100%'
  }
});

