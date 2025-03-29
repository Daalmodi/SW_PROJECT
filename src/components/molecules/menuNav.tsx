import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/screensTypes';
import { StyleSheet } from 'react-native';
const MenuNav = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
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
                            <Icon.Button
                            name="search"
                            size={30}
                            color={'white'}
                            backgroundColor={'transparent'}
                            onPress={()=> navigation.navigate('SearchScreen')}
                            />
                        </View>

    );
};

const styles = StyleSheet.create({
      buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      },
});
export default MenuNav;
