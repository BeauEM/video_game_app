import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenShots from "../components/GameScreenShots";

//Page to load single games + attributes

const GameDetailPage = () => {
  //read slug from URL params
  const { slug } = useParams();

  //custom hook for fetching game from backend
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailers gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
