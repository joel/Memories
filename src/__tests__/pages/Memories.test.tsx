import React from 'react';
import { render } from '@testing-library/react';

import { Memory } from '../../data/memories-context';

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
  beforeEach(() => {});

  test('renders without crashing', () => {
    const { baseElement } = render(<GoodMemories />);
    expect(baseElement).toBeDefined();
    expect(baseElement.textContent).toContain('Good Memories');
    expect(baseElement.textContent).toContain('No good memories found.');
  });

  test('it should mock the context', () => {
    const newMemory: Memory = {
        id: Math.random.toString(),
        title: 'That day!',
        imagePath: 'a/path',
        type: 'good',
    }

    const contextValues = { memories: [ newMemory ] };

    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      contextValues,
    }));

    const { baseElement } = render(<GoodMemories />);
    expect(baseElement).toBeDefined();
  });
});
