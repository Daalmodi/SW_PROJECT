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
  try{
    const response = await fetch(`${API_URL}/films/`);
    if(!response.ok)throw new Error(`HTTP error! Status: ${response.status}`);
    const films = await response.json();
    return films.results as Film[];
  }catch(error){
    console.error('Error Fetching all films: ',error);
    return[];
  }
};




export const fetchAllPlanets = async (): Promise<Planet[]> =>{

  try{
    const response = await fetch(`${API_URL}/planets/`);
    if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const planets = await response.json();
    return planets.results as Planet[];
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
  try{
    const response = await fetch(`${API_URL}/people/`);
    if(!response.ok)throw new Error(`HTTP error! Status: ${response.status}`);
    const characteres = await response.json();
    return characteres.results as Character[];
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

