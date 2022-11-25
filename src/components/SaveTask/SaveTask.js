import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SaveTask.Style';

const SaveTask = value => {
  console.log(value);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Görev Giriniz..."
          onChangeText={item => {
            console.log(item);
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveTask;
