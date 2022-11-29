import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [taskNumber, setTaskNumber] = useState(0);
  const [textArray, setTextArray] = useState([]);
  function saveText() {
    if (text === '') {
      Alert.alert('Lütfen bir görev giriniz');
    } else {
      setTextArray([...textArray, text]);
      setTaskNumber(textArray.length + 1);
      setText('');
    }
  }
  function saveUpperText() {
    if (text === '') {
      Alert.alert('Lütfen bir görev giriniz');
    } else {
      setTextArray([...textArray, text.toUpperCase()]);
      setText('');
      setTaskNumber(textArray.length + 1);
    }
  }
  const textRenderItem = ({item}) => <Text style={styles.Label}>{item}</Text>;
  return (
    <SafeAreaView>
      <Text style={styles.banner}> TO-DO LIST APP</Text>
      <View style={styles.container}>
        <View style={styles.addContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Bir görev yazınız"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={saveText}
          onLongPress={saveUpperText}>
          <Text style={styles.buttonText}> ADD </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Yapılacaklar</Text>
        <Text style={styles.statusNumber}>{taskNumber}</Text>
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
  Label: {
    backgroundColor: 'lightgray',
    fontSize: 20,
    margin: 6,
    padding: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    backgroundColor: 'aqua',
    margin: 6,
    padding: 6,
    borderRadius: 8,
  },
  statusText: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
  },
  statusNumber: {
    marginRight: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default App;
