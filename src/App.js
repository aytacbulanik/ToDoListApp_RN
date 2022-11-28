import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [textArray, setTextArray] = useState([]);
  function saveText() {
    setTextArray([...textArray, text]);
    console.log(textArray);
    setText('');
  }
  const textRenderItem = ({item}) => <Text>{item}</Text>;
  return (
    <SafeAreaView>
      <Text style={styles.banner}> TO-DO LIST APP</Text>
      <View style={styles.container}>
        <View style={styles.addContainer}>
          <TextInput value={text} onChangeText={setText} />
        </View>
        <TouchableOpacity style={styles.button} onPress={saveText}>
          <Text style={styles.buttonText}> ADD </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList data={textArray} renderItem={textRenderItem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  banner: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#aeaeae',
  },
  addContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'aqua',
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
