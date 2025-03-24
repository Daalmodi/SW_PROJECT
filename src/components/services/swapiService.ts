
const API_URL = 'https://swapi.py4e.com/api';

/**
 * Fetch a single film by ID
 */
export const fetchFilmById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/films/${id}/`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const film = await response.json();

    // Fetch related characters, planets, starships, etc.
    const characters = await fetchMultiple(film.characters);
    const planets = await fetchMultiple(film.planets);
    const starships = await fetchMultiple(film.starships);
    const vehicles = await fetchMultiple(film.vehicles);
    const species = await fetchMultiple(film.species);
    // Return full film data with expanded details
    return { ...film, characters, planets, starships, vehicles, species };
  } catch (error) {
    console.error(`Error fetching film with ID ${id}:`, error);
    return null;
  }
};

/**
 * Helper function to fetch multiple resources from an array of URLs
 */
const fetchMultiple = async (urls: string[]) => {
  try {
    const requests = urls.map((url) => fetch(url).then((res) => res.json()));
    return await Promise.all(requests);
  } catch (error) {
    console.error('Error fetching multiple resources:', error);
    return [];
  }
};

