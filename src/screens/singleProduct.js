/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../components/customHeader';
import {BannerWidth} from '../components/shared'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    const product = navigation.getParam('product');
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <CustomHeader showBackBtn={true} navigation={navigation} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View>
                  <Image style={styles.image} source={product.uri} />
                  <Text style={styles.sectionTitle}>{product.name}</Text>
                  <Text style={styles.sectionTitle}>{product.price}</Text>
                  <Text style={styles.sectionDescription}>{product.description}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
 
  body: {
    backgroundColor: Colors.white,
    padding: 0,
  },
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    margin: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  image: {width: BannerWidth-20, resizeMode: 'cover', height: 250}
});

export default App;
