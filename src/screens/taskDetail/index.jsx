import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/color';
import {Divider, Button} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {taskValues, status} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route}) => {
  const {item} = route?.params;
  const deleteTask = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return;
      }
      const tasks = JSON.parse(savedTasks);
      const filteredTasks = tasks.filter(task => task.id !== item.id);
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Görev Silindi');
    } catch (error) {
      console.log('Görev silinirken hata oluştu:', error);
    }
  };

  const updateTask = async newStatus => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return;
      }

      const tasks = JSON.parse(savedTasks);
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus,
          };
        }
        return task;
      });
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
      console.log('Görev Güncellendi', updateTask);
    } catch (error) {
      console.log('Görev güncellenirken hata oluştu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider style={{backgroundColor: 'gray'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider style={{backgroundColor: 'gray'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>StartDate:</Text>
          <Text>{moment(item.startDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider style={{backgroundColor: 'gray'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>EndDate:</Text>
          <Text>{moment(item.endDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider style={{backgroundColor: 'gray'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider style={{backgroundColor: 'gray'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Status:</Text>
          <Text>
            {taskValues.find(task => task.status === item?.status)?.title}
          </Text>
        </View>
        <Divider style={{backgroundColor: 'gray'}} />
      </ScrollView>

      <Button
        onPress={() => updateTask(status.PENDING)}
        style={styles.button}
        appearance="outline"
        status="primary">
        START
      </Button>
      <Button
        onPress={() => updateTask(status.COMPLETED)}
        style={styles.button}
        appearance="outline"
        status="info">
        COMPLETED
      </Button>
      <Button
        onPress={() => updateTask(status.CANCEL)}
        style={styles.button}
        appearance="outline"
        status="warning">
        CANCEL
      </Button>
      <Button
        onPress={deleteTask}
        style={styles.button}
        appearance="outline"
        status="danger">
        DELETE
      </Button>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
});
