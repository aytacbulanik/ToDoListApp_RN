import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}> Yapılacaklar </Text>
        <Text style={styles.bannerNumber}>{number}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027',
  },
  bannerContainer: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    padding: 6,
    margin: 5,
    borderRadius: 5,
  },
  bannerText: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
  },
  bannerNumber: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 5,
  },
});
export default App;
