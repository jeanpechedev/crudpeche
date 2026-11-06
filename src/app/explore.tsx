import { StyleSheet, Text, View } from 'react-native';

const explore = () => {
  return (
    <View style={styles.container}>
      <Text>NOSOTROS</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate iste soluta quae 
        impedit, selectus a illo minima eum, quia dolorum, mos ipsum laborum consectetur repellendus.</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});