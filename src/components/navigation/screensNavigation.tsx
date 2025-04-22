import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FilmScreen from '../screens/filmScreen';
import PlanetsScreen from '../screens/planetsScreen';
import CharacteresScreen from '../screens/characteresScreen';
import SearchScreen from '../screens/searchScreen';
import PlanetCard from '../molecules/planetCard';
import { RootStackParamList } from '../types/screensTypes';
import FilmCard from '../molecules/filmCard';
import CharacterCard from '../molecules/characterCard';

const Stack = createNativeStackNavigator<RootStackParamList>();
const ScreensNavigation = () => {
    return(
        <Stack.Navigator
                initialRouteName="FilmScreen"
                screenOptions={{
                  headerShown:false,
                  gestureEnabled:false,
                  contentStyle:{
                    backgroundColor:'transparent',
                  }
                }}
                >
                        <Stack.Screen name="FilmScreen" component={FilmScreen} />
                        <Stack.Screen name="PlanetsScreen" component={PlanetsScreen} />
                        <Stack.Screen name="CharacteresScreen" component={CharacteresScreen}/>
                        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
                        <Stack.Screen name="PlanetCard" component={PlanetCard}/>
                        <Stack.Screen name="FilmCard" component={FilmCard}/>
                        <Stack.Screen name="CharacterCard" component={CharacterCard}/>
        </Stack.Navigator>

    );
};
export default ScreensNavigation;
