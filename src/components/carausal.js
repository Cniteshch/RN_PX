/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet, View, Image, Alert, TouchableHighlight} from 'react-native';

import Carousel from 'react-native-banner-carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPage(image, index) {
    const {BannerHeight, BannerWidth} = this.props;
    return (
      <View key={index}>
        <TouchableHighlight
          onPress={() => Alert.alert('open promotional link')}>
          <Image
            style={{width: BannerWidth, height: BannerHeight}}
            source={image.uri}
          />
        </TouchableHighlight>
      </View>
    );
  }
  render() {
    const {images, BannerWidth} = this.props;
    return (
      <View style={styles.container}>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}>
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
