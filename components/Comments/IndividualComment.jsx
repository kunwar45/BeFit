import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function IndividualComment({title, body}) {
  return (
    <View style={styles.containter}>
      <View style={styles.row}>
        <View style={styles.profilePictuteColumn}>
          <Image
            style={styles.image}
            source={require('../../assets/images/pushups.jpg')}
          />
        </View>
        <View style={styles.textColumn}>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={[styles.text, styles.body]}>{body}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '90%'

  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profilePictuteColumn: {
    flexDirection: 'column',
    width: '20%',
  },
  textColumn: {
    flexDirection: 'column',
    width: '80%',
  },
  text: {
    color: 'white',
  },
  title: {
    fontSize: 14,
  },
  body: {
    fontSize: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderColor: 'white',
    borderRadius: 20,
  }
});

