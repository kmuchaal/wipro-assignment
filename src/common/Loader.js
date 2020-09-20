import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import {useSelector} from 'react-redux';

const Loader = props => {

  const state = useSelector(state => state);

  return (
    <Modal
      visible={state.Global.isFetching}
      transparent={true}
      animationType={'none'}
      onDismiss={() => {}}
      onRequestClose={() => {}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.loaderAreaView}>
        <ActivityIndicator size="large" color="#513223" />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  loaderAreaView: {
    //backgroundColor: 'rgb(255,255,255)',
    //height: 220,
  },
  
});

export default Loader;