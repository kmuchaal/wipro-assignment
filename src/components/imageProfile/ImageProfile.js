import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text, Button
} from 'react-native';
import { } from '../../constants/Images';
import {STYLE} from '../../styles/GlobalStyle';
import { } from '../../constants/Constant';
import * as Color from '../../constants/Colors';
import { } from '../../thunkApiCall';
import {useDispatch, useSelector} from 'react-redux';

import { 
  requestImageProfileNetworkCall,
  requestSingleImageProfileNetworkCall
 } from '../../thunkApiCall';
import ListItem from '././ListItem';

var imageProfile = []

const ImageProfile = ({navigation, value}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [index, setIndex] = useState(0);

  if(state.ImageProfile.setImageProfileResponse != null ) {
    imageProfile = state.ImageProfile.setImageProfileResponse
  }

  const refresh=()=>{
    setIndex(Math.floor(Math.random() * 200))
   }

  const imageProfileNetworkCall = () => {
    refresh();
    dispatch(
      requestImageProfileNetworkCall(res => {
        if (res) {
         
        } else if (res.errors) {
          
        } else {
         
        }
      }),
    );
  };

  const singleImageProfileNetworkCall = async (profileId) => {

    try {
      let response = await fetch(
        'https://picsum.photos/400/600?image=0'
      );
      let json = await response
      console.log(json)
      return json.url;
    } catch (error) {
      console.error(error);
    }
    // dispatch(
    //   requestSingleImageProfileNetworkCall(0, res => {
    //     if (res) {
    //       console.log(res)
    //       return res.url
    //     } else if (res.errors) {
          
    //     } else {
          
    //     }
    //   }),
    // );
  };

  useEffect(() => {
    imageProfileNetworkCall()
  }, []);

  // const Item = ({ item }) => {
  //   let imageUri = singleImageProfileNetworkCall(item.id)
  //   console.log(item.id + ' : ' + imageUri)
  //     return(<View style={{borderColor: 'blue', borderWidth:11, margin: 10}}>
  //       <Image source={{ uri: `https://picsum.photos/400/600?image=${item.id}` }}
  //       // this will call one api response will resolved
        
  //         style={{
  //           height: 300,
  //           width: 200,
  //           resizeMode: 'cover'}} />
  //           <Text>{item.id}</Text>
  //     </View>)
  // }

  const renderItem = ({ item }) => (
    <ListItem Item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
          data={imageProfile.slice(index, index+25)}
          initialNumToRender={5}
          keyExtractor={({ id }, index) => id + ''}
          renderItem={renderItem}
          horizontal={true}
        />
       <Button title={'Refresh'} onPress={()=>{refresh()}}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //flex: 1,
    //justifyContent: 'center',
    backgroundColor: Color.GLOBAL_APP_BACKGROUND_COLOR,
  },
});

export default ImageProfile;