import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      xxl: '(min-width: 1536px)'
    }
  },
});