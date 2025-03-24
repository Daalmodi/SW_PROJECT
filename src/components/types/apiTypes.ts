export interface Character {
    name: string;
    url: string;
  }
  export interface Planet {
    name: string;
    url: string;
  }
  export interface Film {
    title?: string;
    director?: string;
    producer?: string;
    release_date?: string;
    opening_crawl?: string;
    characters?: Character[];
    planets?: Planet[];
    url?: string;
  }
