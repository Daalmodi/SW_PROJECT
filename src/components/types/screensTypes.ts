
import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type RootStackParamList = {
    FilmScreen: undefined;
    PlanetsScreen: undefined;
    PlanetCard: {url:string};
    FilmCard:{url:string};
    CharacteresScreen: undefined;
    SearchScreen: undefined;
  };



  export type PlanetCardProps = NativeStackScreenProps<RootStackParamList, 'PlanetCard'>;
  export type FilmCardProps = NativeStackScreenProps<RootStackParamList,'FilmCard'>;


