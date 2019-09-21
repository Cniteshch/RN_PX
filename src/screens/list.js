/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../components/customHeader';
import GridView from '../components/gridView';
import {
  BannerHeight,
  BannerWidth,
  FeaturedList,
  BestSellList,
  Featured,
  BestSell,
} from '../components/shared';

class App extends React.Component {
  render() {
    const {navigation} = this.props;
    const Label = navigation.getParam('label');
    return (
      <View>
        <SafeAreaView>
          <CustomHeader showBackBtn={true} navigation={this.props.navigation} />
          <Text style={styles.title}>{Label}</Text>
          <GridView
            style={styles.singleItemContainer}
            BannerWidth={BannerWidth / 2.2}
            navigation={this.props.navigation}
            list={Label === Featured ? FeaturedList : BestSellList}
            label="Best sell"
            active="LIST"
            BannerHeight={BannerHeight}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
  },
  singleItemContainer: {
    flexDirection: 'column',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
