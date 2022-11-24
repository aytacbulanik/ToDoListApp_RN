import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import TaskLabel from './components/TaskLabel/TaskLabel';
import SaveTask from './components/SaveTask/SaveTask';

const App = () => {
  const [number, setNumber] = useState(0);
  const [tasks, setTasks] = useState([]);

  const renderTask = item => {
    <TaskLabel task={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}> Yapılacaklar </Text>
        <Text style={styles.bannerNumber}>{number}</Text>
      </View>
      <FlatList data={tasks} renderItem={renderTask} />
      <SaveTask />
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
});
export default App;
