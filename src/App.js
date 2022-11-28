import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.addContainer}>
          <TextInput />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> ADD </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  addContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  textInputContainer: {
    margin: 8,
    padding: 5,
    height: 40,
    borderRadius: 6,
    flex: 1,
  },
  button: {
    backgroundColor: 'aqua',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default App;
