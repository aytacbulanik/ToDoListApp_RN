import {View, Text} from 'react-native';
import React from 'react';
import styles from './TaskLabel.Style';

const TaskLabel = ({task}) => {
  return (
    <View style={styles.container}>
      <Text>TaskLabel</Text>
    </View>
  );
};

export default TaskLabel;
