export interface Character {
    name: string;
    url: string;
  }
  export interface Planet {
    name?: string;
    rotation_period?:string;
    orbital_period?:string;
    diameter?:string;
    climate?:string;
    gravity?:string;
    terrain?:string;
    surface_water?:string;
    population?: string;
    url?:string;
  }
  export interface Film {
    title: string;
    director: string;
    producer: string;
    release_date: string;
    opening_crawl: string;
    characters?: Character[];
    planets?: Planet[];
    url?: string;
  }

  export interface ListItemProps {
    data: string;        // Puede ser un `Planet`, `Character` o `Film`
    onPress: () => void;  // Acción al hacer clic
  }
