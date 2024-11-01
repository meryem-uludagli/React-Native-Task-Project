import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TASKDETAIL} from '../../utils/routes';
import {taskValues} from '../../utils/constant';
import {setCategory} from '../../utils/function';

const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        style={{
          backgroundColor: taskValues.find(task => task.status === item.status)
            ?.color,
          padding: 3,
          borderRadius: 5,
        }}>
        {taskValues.find(task => task.status === item?.status)?.icon}
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
          {item.description}
        </Text>
        <View>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'black'}}>
            {moment(item.startDate).format('DD/MM/YYYY')}-
            {moment(item.endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'blue'}}>
          {setCategory(item.category)}
        </Text>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
});
