import { keyframes } from '@emotion/react';

const getAnimation = keyframes`
to {
  background-position: 100% 0;
}
`;

const skeletonLoader = {
  display: 'block',
  background: `linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray`,
  backgroundRepeat: 'repeat-y',
  backgroundSize: '50px 500px',
  backgroundPosition: '0 0',
  animation: `${getAnimation} 1s infinite`,
};
