import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
        {item.title}
      </Text>
      <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
        {item.description}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
            Start Date
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {item.startDate}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
            End Date
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {item.endDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
});
