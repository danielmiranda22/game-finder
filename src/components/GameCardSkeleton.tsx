import {
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <CardHeader>
        <SkeletonCircle size="10" />
      </CardHeader>
      <CardBody>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
