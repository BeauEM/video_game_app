import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

//styling for GameCard and GameCardSkeleton
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
