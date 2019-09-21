/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import SingleItem from './singleItem';

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
    };
  }

  _keyExtractor = (item, index) => index;

  renderRowItem = ({item, index}) => {
    const {BannerHeight, BannerWidth, navigation, style} = this.props;
    return (
      <View>
        <SingleItem
          style={style}
          navigation={navigation}
          BannerHeight={BannerHeight}
          BannerWidth={BannerWidth}
          item={item}
          index={item.index ? item.index : 0}
        />
      </View>
    );
  };

  render() {
    const {list, active, label, navigation} = this.props;
    return (
      <View>
        <SafeAreaView>
          <View style={styles.scrollView}>
            <FlatList
              style={styles.mainView}
              data={list}
              numColumns={2}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderRowItem}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingBottom: 250,
  },

  mainView: {},
  ListHead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  SideText: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
});
