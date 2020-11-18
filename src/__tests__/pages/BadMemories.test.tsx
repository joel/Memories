import React from 'react';
import { render } from '@testing-library/react';

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

import BadMemories from '../../pages/BadMemories';

test('renders without crashing', () => {
    const { baseElement } = render(<BadMemories />);
    expect(baseElement).toBeDefined();
});
