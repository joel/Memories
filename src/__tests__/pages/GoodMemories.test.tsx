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

import GoodMemories from '../../pages/GoodMemories';

describe('GoodMemories', () => {
  beforeEach(() => {
  });

  test('renders without crashing', () => {
    const { baseElement } = render(<GoodMemories />);
    expect(baseElement).toBeDefined();
    expect(baseElement.textContent).toContain('Good Memories');
    expect(baseElement.textContent).toContain('No good memories found.');
  });
});

