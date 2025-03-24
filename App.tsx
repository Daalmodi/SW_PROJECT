/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import "'./global.css'";

import { ScrollView, StyleSheet, View } from 'react-native';
import FilmCard from './src/components/molecules/filmCard';




function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
        <View style={styles.header}/>
        <View style={styles.card}>
          <ScrollView>
            <FilmCard/>
          </ScrollView>
        </View>
        <View style={styles.footer}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flexDirection: 'column',
    flex:1,
  },
  header : {
    flex:0.5,
    backgroundColor:'red',
    width:'100%',
    height:700,
  },
  card : {
    flex:3,
    backgroundColor:'blue',
    padding:10,
  },
  footer:{
    flex:0.5,
    backgroundColor:'green',
  },
});


export default App;
