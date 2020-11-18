import React from 'react';
import { mount } from 'cypress-react-unit-test';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../../src/theme/variables.css';
import '../../src/theme/theme.css';

import GoodMemories from '../../src/pages/GoodMemories';

import MemoriesContext, { Memory } from '../../src/data/memories-context';
// import MemoriesContext, { Memory } from './memories-context';

describe('GoodMemories', () => {
  it('mount component', () => {
    const newMemory: Memory = {
      id: Math.random.toString(),
      title: 'That day!',
      imagePath: './fixtures/pic.jpg',
      type: 'good',
    };

    const memories: Memory[] = [ newMemory ]

    mount(
      <div className='ion-page'>
        <MemoriesContext.Provider value={{
            memories: memories
          }}
        >
          <GoodMemories />
        </MemoriesContext.Provider>
      </div>
    );
    cy.contains('That day!').should('be.visible');
    // cy.contains('No good memories found.').should('be.visible');
  });
});
