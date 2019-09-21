import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {View, Alert} from 'react-native';

import styles from './style';

const CustomHeader = ({navigation, showBackBtn}) => (
  <View style={[styles.container]}>
    <TouchableOpacity
      onPress={() =>
        showBackBtn ? navigation.goBack() : navigation.openDrawer()
      }>
      <Image
        style={showBackBtn ? styles.menuBtn : styles.menuBtn}
        source={
          showBackBtn
            ? require('../../images/back.png')
            : require('../../images/menu.png')
        }
      />
    </TouchableOpacity>
    <View style={styles.RightContainer}>
      <TouchableOpacity onPress={() => Alert.alert('searched clicked')}>
        <Image
          style={styles.RightIcons}
          source={require('../../images/search.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{}} onPress={() => Alert.alert('help clicked')}>
        <Image
          style={styles.RightIcons}
          source={require('../../images/help.png')}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default CustomHeader;
