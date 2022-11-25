import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const renderTaskItem = ({item}) => <Text style={styles.label}>{item}</Text>;

  function listeyiGuncelle() {
    setNumber(number + 1);
    setTasks([...tasks, text]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}> Yapılacaklar </Text>
        <Text style={styles.bannerNumber}>{number}</Text>
      </View>
      <FlatList
        key={item => item.id}
        data={tasks}
        renderItem={renderTaskItem}
      />
      <View style={styles.savecontainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Görev Giriniz..."
            onChangeText={setText}
            value={text}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={listeyiGuncelle}>
          <Text style={styles.title}>Kaydet</Text>
        </TouchableOpacity>
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
    margin: 8,
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
  savecontainer: {
    margin: 15,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: 'black',
    padding: 5,
  },
  button: {
    backgroundColor: 'gray',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  label: {
    backgroundColor: 'aqua',
    margin: 6,
    padding: 5,
    fontSize: 16,
    borderRadius: 6,
  },
});
export default App;
