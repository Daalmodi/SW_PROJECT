
import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type RootStackParamList = {
    FilmScreen: undefined;
    PlanetsScreen: undefined;
    PlanetCard: {url:string};
    FilmCard:{url:string};
    CharacterCard:{url:string};
    CharacteresScreen: undefined;
    SearchScreen: undefined;
  };



  export type PlanetCardProps = NativeStackScreenProps<RootStackParamList, 'PlanetCard'>;
  export type FilmCardProps = NativeStackScreenProps<RootStackParamList,'FilmCard'>;
  export type CharacterCardProps= NativeStackScreenProps<RootStackParamList,'CharacterCard'>;


