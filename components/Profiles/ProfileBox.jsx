import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function ProfileBox() {
  return (
    <View style={styles.profileContainer}>
        <Image style={styles.userProfile} source={require('../../assets/images/pushups.jpg')}/>
        <Text style={styles.textStyle}> John Doe</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: 133,
    height: 50,
    backgroundColor: '#292A3F',


    borderRadius: 15,

    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    left: 5,
  },

  textStyle: {
    color: 'white',
    left: 45,
    top: -20,
  },

  userProfile: {
    height: 34,
    width: 34,
    left: 6,
    top: 8,

    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10000,
  },
});



