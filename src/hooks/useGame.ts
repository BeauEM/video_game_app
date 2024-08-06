import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

//custom hook for fetching game from backend
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug], //whenever slug changers, react query fetches another game from backend
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
