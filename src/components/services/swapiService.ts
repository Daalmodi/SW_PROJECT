import { Character, Film, Planet } from "../types/apiTypes";

const API_URL = 'https://swapi.py4e.com/api';

/**
 * Fetch a single film by ID
 */
export const fetchFilmByUrl = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const film = await response.json();
    // Return full film data with expanded details
    return { ...film };
  } catch (error) {
    console.error(`Error fetching film with ID ${url}:`, error);
    return null;
  }
};

export const fetchAllFilms = async ():Promise<Film[]> =>{

  let url = `${API_URL}/films/`;
  let allFilms:Film[] = [];
  try{
    while(url){
      const response = await fetch(url);
      if(!response.ok)throw new Error(`HTTP error! Status: ${response.status}`);
      const films = await response.json();
      allFilms = [...allFilms,...films.results];
      url = films.next;
    }
    return allFilms;
  }catch(error){
    console.error('Error Fetching all films: ',error);
    return[];
  }
};




export const fetchAllPlanets = async (): Promise<Planet[]> =>{
  let url = `${API_URL}/planets/`;
  let allPlanets: Planet[] = [];
  try{
    while(url){
      const response = await fetch(url);
      if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const planets = await response.json();
      allPlanets = [...allPlanets,...planets.results];
      url = planets.next;
    }
    return allPlanets;
  } catch (error) {
    console.error('Error Fetching  all planets: ',error);
    return[];
  }

};

export const fetchPlanetByUrl = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const planet = await response.json();
    // Return planet by url planet data with expanded details
    return { ...planet};
  } catch (error) {
    console.error(`Error fetching planet with ID ${url}:`, error);
    return null;
  }
};

export const fetchAllCharacters = async ()=>{
  let url = `${API_URL}/people`;
  let allCharacteres: Character[] = [];
  try{
    while(url){
      const response = await fetch(url);
      if(!response.ok)throw new Error(`HTTP error! Status: ${response.status}`);
      const characteres = await response.json();
      allCharacteres = [...allCharacteres,...characteres.results];
      url = characteres.next;
    }
    return allCharacteres;

  }catch(error){
    console.error('Error fetching  all characteres');
    return[];
  }
};


export const fetchCharacterByUrl = async (url:string)=>{
  try{
    const response = await fetch(`${url}`);
    if(!response.ok) throw new Error(`HTTP error! Status:${response.status}`);
    const character = await response.json();
    return{...character};
  }catch(error){
    console.error(`Error fetching character with Id ${url}:`,error);
    return null;
  }
};


export const fetchSearchALL = async (query:string) =>{
  if (!query.trim()) return { films: [], characters: [], planets: [] }
  try{

    const[filmsRes, charactersRes, planetsRes] = await Promise.all([
      fetch(`${API_URL}/films/?search=${query}`),
      fetch(`${API_URL}/people/?search=${query}`),
      fetch(`${API_URL}/planets/?search=${query}`),
    ]);

    if (!filmsRes.ok || !charactersRes.ok || !planetsRes.ok) {
      throw new Error('Error en la búsqueda.');
    }
    const films = await filmsRes.json();
    const characters = await charactersRes.json();
    const planets = await planetsRes.json();

    return {
      films: films.results,
      characters: characters.results,
      planets: planets.results,
    };
  }catch(error){
    console.error('Error fetching search results',error);
    return{films:[],characters:[],planets:[]};
  }
};
