import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';


const App = () => ( 
  <View style={{flex : 1}}>
  <Header HeaderName ={'Albums List'} />
    <AlbumList/>
  </View>

 ); 

AppRegistry.registerComponent('TestProject', () => App);