import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [isExpended, setIsExpended] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>children</Text>;

  return (
    <Box>
      {isExpended ? (
        <Text>{children}</Text>
      ) : (
        children.substring(0, 300) + '... '
      )}
      <Button
        colorScheme="yellow"
        size="xs"
        onClick={() => setIsExpended(!isExpended)}
      >
        {isExpended ? 'Read Less' : 'Read More'}
      </Button>
    </Box>
  );
};

export default ExpendableText;
