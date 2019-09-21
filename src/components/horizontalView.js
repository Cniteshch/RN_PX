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
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SingleItem from './singleItem';
const HorizontalView = ({
  productList,
  routeTo,
  BannerHeight,
  BannerWidth,
  label,
  navigation,
}) => (
  <View>
    <SafeAreaView>
      <View>
        <View style={styles.ListMain}>
          <Text style={styles.ListHead}>{label}</Text>
          <View style={styles.SideText}>
            <TouchableOpacity
              onPress={() => navigation.navigate(routeTo, {label: label})}>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true}>
          {productList.map((product, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'column',
                  padding: 10,
                }}>
                <SingleItem
                  navigation={navigation}
                  BannerHeight={BannerHeight}
                  BannerWidth={BannerWidth}
                  item={product}
                  index={index}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  ListMain: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
  },
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

export default HorizontalView;
