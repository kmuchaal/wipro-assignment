import * as React from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageProfile from '../components/imageProfile/ImageProfile'
import SingleImageProfileView from '../components/imageProfile/SingleImageProfileView'
const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
      <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="ImageProfile" component={ImageProfile}/>
        <Stack.Screen name="SingleImageProfileView" component={SingleImageProfileView}/>
      </Stack.Navigator>    
    </SafeAreaView>
    )
  }

  const Router = () => {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      overflow:"hidden",
      flex: 1,
      justifyContent: 'center',
    }
  });

export default Router;