import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//Rawg API does not return platform objects, but rather objects with platforms as a property, so we define that in out interface

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
