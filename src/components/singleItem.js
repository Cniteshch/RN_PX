/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const SingleItem = ({
  item,
  index,
  BannerHeight,
  BannerWidth,
  navigation,
  style,
}) => {
  index ? index : 0;
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SINGLEPRODUCT', {product: item})}>
        <View style={style ? style : {}}>
          <Image
            style={{height: BannerHeight, width: BannerWidth}}
            source={item.uri}
          />
          <Text style={{fontSize: 15, color: '#000'}}>{item.price}</Text>
          <Text style={{fontSize: 15, color: '#000'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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

export default SingleItem;
