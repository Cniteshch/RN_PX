/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../components/customHeader';
import HorizontalView from '../components/horizontalView';
import Carausal from '../components/carausal';
import {
  images,
  FeaturedList,
  BestSellList,
  BannerHeight,
  BannerWidth,
  Featured,
  BestSell,
} from '../components/shared';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth, height: BannerHeight}}
          source={require('../images/banner.png')}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <CustomHeader navigation={this.props.navigation} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Carausal
                images={images}
                BannerWidth={BannerWidth}
                BannerHeight={BannerHeight}
              />
            </View>

            <HorizontalView
              navigation={this.props.navigation}
              productList={FeaturedList}
              label={Featured}
              routeTo="LIST"
              BannerHeight={BannerHeight}
            />
            <HorizontalView
              navigation={this.props.navigation}
              productList={BestSellList}
              label={BestSell}
              routeTo="LIST"
              BannerHeight={BannerHeight}
            />
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
  },
});

export default App;
