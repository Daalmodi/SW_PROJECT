
import { View, StyleSheet } from 'react-native';
import React from 'react';
import MenuNav from '../molecules/menuNav';
import ScreensNavigation from '../navigation/screensNavigation';


const StaticScreen : React.FC = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}/>
            <View style={styles.tree}>
              <ScreensNavigation/>
            </View>
            <View style={styles.footer}>
                <MenuNav/>
            </View>
         </View>

    );
};


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
    tree : {

      flex:3,
      backgroundColor:'blue',
      padding:10,

    },
    footer:{
      flex:0.5,
      flexDirection:'column',
     backgroundColor:'black',
     alignContent :'center',
     justifyContent:'center',
    },

  });
export default StaticScreen;
