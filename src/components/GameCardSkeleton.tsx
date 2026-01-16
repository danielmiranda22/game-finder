import {
  Card,
  CardBody,
  Flex,
  Skeleton,
  SkeletonText,
  useColorMode,
} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  const { colorMode } = useColorMode();

  return (
    <Card bg={colorMode === 'light' ? 'gray.50' : ''}>
      {/* Image placeholder */}
      <Skeleton height="200px" />

      <CardBody>
        {/* Platform icons + score placeholder */}
        <Flex justifyContent="space-between" mb={3}>
          <Skeleton height="20px" width="100px" />
          <Skeleton height="20px" width="40px" />
        </Flex>

        {/* Game title placeholder */}
        <SkeletonText mt={3} noOfLines={2} spacing="2" skeletonHeight="3" />

        {/* Emoji placeholder */}
        <Skeleton mt={2} height="24px" width="24px" borderRadius="full" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
