import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type RootStackParamList = {
    FilmScreen: undefined;
    PlanetsScreen: undefined;
    PlanetCard: {url:string};
    CharacteresScreen: undefined;
    SearchScreen: undefined;
  };

export type FilmScreenProps ={
    navigation: NativeStackNavigationProp<RootStackParamList,'FilmScreen'>;
  };

  export type PlanetCardProps = NativeStackScreenProps<RootStackParamList, 'PlanetCard'>;



