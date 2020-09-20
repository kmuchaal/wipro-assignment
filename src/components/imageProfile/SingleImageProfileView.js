import React, { useState, useEffect} from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import * as Color from '../../constants/Colors';

const SingleImageProfileView = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textPreview}>This is preview</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.GLOBAL_APP_BACKGROUND_COLOR,
  },
  textContainer: {
    width: 244,
  },
  textPreview: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: -0.015,
    textAlign: 'center',
  },
});

export default SingleImageProfileView;
