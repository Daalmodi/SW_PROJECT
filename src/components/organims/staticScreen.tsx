
import { createNativeStackNavigator,NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet,Button } from 'react-native';
import PlanetsScreen from '../screens/planetsScreen';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

import { RootStackParamList } from '../types/screensTypes';

import FilmScreen from '../screens/filmScreen';


const Stack = createNativeStackNavigator();
const StaticScreen : React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
            <View style={styles.header}/>


            <View style={styles.tree}>

                <Stack.Navigator initialRouteName='FilmScreen'>
                        <Stack.Screen name="FilmScreen" component={FilmScreen} />
                        <Stack.Screen name="PlanetsScreen" component={PlanetsScreen} />
                </Stack.Navigator>
            </View>
            <View style={styles.footer}>
                <View >
                    <Button
                        title="Film Screen"
                        onPress={() => navigation.navigate('FilmScreen')}
                    />
                    <Button
                        title="Planets Screen"
                        onPress={() => navigation.navigate('PlanetsScreen')}
                    />
                </View>
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
     backgroundColor:'green',
    },
  });
export default StaticScreen;
