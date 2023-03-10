import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IndividualComment from './IndividualComment';

export default function CommentBox() {
  return (
    <View style={styles.commentContainer}>
        <Text style={styles.text}>Comments</Text>
        <IndividualComment title="first" body="hello"/>
        <IndividualComment title="second" body="ghar"/>
        <IndividualComment title="third." body="goob"/>
        <IndividualComment title="fourth." body="goob"/>
        <IndividualComment title="fifth." body="goob"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    boxSizing: 'borderBox',
    width: '100%',
    height: 410,
    backgroundColor: '#303144',
    
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,

    borderTopWidth: 2,

    // marginBottom: 30,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
});

