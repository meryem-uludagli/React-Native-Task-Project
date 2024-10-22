import {Add} from 'iconsax-react-native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#FF8A65" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
    right: 30,
    height: 70,
  },
});