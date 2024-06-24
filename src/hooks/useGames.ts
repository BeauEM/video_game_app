import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

//combine our useState / useEffect hooks into a custom hook to seperate concerns in GameGrid.tsx and reduce code clutter

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
