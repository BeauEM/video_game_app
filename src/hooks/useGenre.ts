import useGenres from "./useGenres";
//hook to centralize repeated logic for getting a game genre
const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
