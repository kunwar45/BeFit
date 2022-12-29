import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostThumbnail from './PostThumbnail';

export default function NewPost() {
  return (
    <View style={styles.postContainer}>
      <View style={styles.thumbnailContainer}>
        <PostThumbnail imgSrc='assets/images/pushups.jpg'/>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.text}>Retry</Text>
            </View>
            <View style={styles.column}>
            <Text style={styles.text}>Photo</Text>
            </View>
            <View style={styles.column}>
            <Text style={styles.text}>Lightning</Text>
            </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    boxSizing: 'borderBox',
    width: 348,
    height: 666,
    backgroundColor: '#303144',
    
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,

    top: 40,
    marginBottom: 30,
  },
  text: {
    color: 'white',
  },
  thumbnailContainer: {
    top: 50,
    width: '100%',
    height: '70%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
  },
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '90%'

  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '33%',
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
