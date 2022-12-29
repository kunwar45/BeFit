import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

// interface PostThumbnailProps {
//   imgSrc: string;
// }



export default function PostThumbnail({imgSrc}) {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.image} source={require('../../assets/images/pushups.jpg')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    boxSizing: 'borderBox',
    width: '100%',
    height: '100%',

    position: 'absolute',
    // borderWidth: 2,
    // borderColor: 'white',
    borderRadius: 10,

    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  }
});

