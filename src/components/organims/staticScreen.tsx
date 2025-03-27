
import { createNativeStackNavigator,NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import PlanetsScreen from '../screens/planetsScreen';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
 import Icon from 'react-native-vector-icons/FontAwesome';

import { RootStackParamList } from '../types/screensTypes';

import FilmScreen from '../screens/filmScreen';
import CharacteresScreen from '../screens/characteresScreen';

const Stack = createNativeStackNavigator();
const StaticScreen : React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
            <View style={styles.header}/>


            <View style={styles.tree}>

                <Stack.Navigator initialRouteName="FilmScreen">
                        <Stack.Screen name="FilmScreen" component={FilmScreen} />
                        <Stack.Screen name="PlanetsScreen" component={PlanetsScreen} />
                        <Stack.Screen name="CharacteresScreen" component={CharacteresScreen}/>
                </Stack.Navigator>
            </View>
            <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                    <Icon.Button
                    name="globe"
                    size={30}
                    color={'white'}
                    backgroundColor={'transparent'}
                    onPress={() => navigation.navigate('PlanetsScreen')}
                    />
                    <Icon.Button
                    name="film"
                    size={30}
                    color={'white'}
                    backgroundColor={'transparent'}
                    onPress={() => navigation.navigate('FilmScreen')}
                    />
                    <Icon.Button
                    name="users"
                    size={30}
                    color={'white'}
                    backgroundColor={'transparent'}
                    onPress={()=> navigation.navigate('CharacteresScreen')}
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
      flexDirection:'column',
     backgroundColor:'green',
     alignContent :'center',
     justifyContent:'center',
    },
    buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },
  });
export default StaticScreen;
