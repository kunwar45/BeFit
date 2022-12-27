import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/Title';

export default function FriendsList() {
  return (
    <View style={styles.mainPage}>
        <Title/>
        <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                <Text>Search</Text>
            </View>
            <View style={styles.leaderBoardContainer}>
                <Text> Leaderboard </Text>

                <View style={styles.personalStats}> 
                    <Text style={styles.text}> Your Stats </Text>
                </View>

            </View>


            

            <SafeAreaView style={styles.friendsContainer}>
            <Text>My fiend</Text>
                <ScrollView style={styles.scrollView}>
                    <Text> Profile </Text>
                    <Text> Profile </Text>
                    <Text> Profile </Text>
                    <Text> Profile </Text>
                    <Text> Profile </Text>
                    <Text> Profile </Text>
                    

                    
                </ScrollView>
            </SafeAreaView>

        </View>

       
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    mainPage: {
        backgroundColor: "#1D1E2C",
        flex: 1,
        alignItems: 'center',

    },

    mainContainer: {
    top: 109,
    boxSizing: 'borderBox',
    width: 348,
    height: 663,
    backgroundColor: '#1D1E2C',

    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',

    },

    searchContainer: {
        boxSizing: 'borderBox',
        width: 322,
        height: 26,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        top: 16,
    },

    leaderBoardContainer: {
        boxSizing: 'borderBox',
        width: 322,
        height: 292,
        backgroundColor: '#33354F',
        top: 34,
        borderRadius: 15,
        alignItems: 'center',

    },

    personalStats: {
        boxSizing: 'borderBox',
        width: 294,
        height: 73,
        backgroundColor: '#2E3055',
        borderRadius: 15,
        top: 195,
        bott: 4,
    },

    friendsContainer: {
        boxSizing: 'borderBox',
        width: 322,
        height: 292,
        backgroundColor: '#33354F',
        borderRadius: 15,
        alignItems: 'center',
        top: 40,

    },

    profile: {
        
    },

    scrollView: {
        width: '100%',
      },

  text: {
    color: 'white',
  },
});

