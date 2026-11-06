import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const Index = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
      >
        <Image
          source={require('../../assets/images/banner1.png')}
          style={{ width: width, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/banner2.png')}
          style={{ width: width, height: 200 }}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/banner3.png')}
          style={{ width: width, height: 200 }}
          resizeMode="contain"
        />
      </ScrollView>
      <Text>INICIO</Text>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eveniet atque cumque ducimus quae explicabo dicta? Libero pariatur debitis magni. Natus hic suscipit quod fugit ipsum dolor sint quis voluptas!
      Labore ipsum, nisi, in consequatur cum voluptate quam quae voluptates quas, neque a nemo magni! Similique deleniti consectetur ducimus ipsam veniam molestias dolorem atque. Eveniet laudantium sit amet aliquam beatae?</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});