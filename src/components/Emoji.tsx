import bullEyes from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '20px' },
    4: { src: thumbsUp, alt: 'recomended', boxSize: '20px' },
    5: { src: bullEyes, alt: 'exceptional', boxSize: '25px' },
  };

  return <Image {...emojiMap[rating]} mt={3} />;
};

export default Emoji;
