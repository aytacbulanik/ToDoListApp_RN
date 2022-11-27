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
      <View style={styles.addContainer}>
        <TextInput style={styles.addContainer} />
        <TouchableOpacity>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addContainer: {flexDirection: 'row', backgroundColor: 'red'},
  textInputContainer: {
    margin: 10,
    padding: 5,
    height: 30,
    borderRadius: 6,
  },
  button: {},
});
export default App;
