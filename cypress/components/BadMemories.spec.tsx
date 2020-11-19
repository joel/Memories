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

import BadMemories from '../../src/pages/BadMemories';

import MemoriesContext, { Memory } from '../../src/data/memories-context';

describe('BadMemories', () => {
  it('without bad memories', () => {
    mount(
      <div className='ion-page'>
        <BadMemories />
      </div>
    );
    cy.contains('Bad Memories').should('be.visible');
    cy.contains('No bad memories found.').should('be.visible');
  });

  it('with bad memories', () => {
    const newMemory: Memory = {
      id: Math.random.toString(),
      title: 'That day :(',
      imagePath: Math.random().toString() + '.jpg',
      type: 'bad',
      base64Url: null,
    };

    const data = cy.fixture('face-sad.jpg', 'base64').then((file) => {
      const base64Url = 'data:image/jpeg;base64,' + file;
      newMemory.base64Url = base64Url;
    });

    const memories: Memory[] = [newMemory];

    mount(
      <div className='ion-page'>
        <MemoriesContext.Provider
          value={{
            memories: memories,
          }}
        >
          <BadMemories />
        </MemoriesContext.Provider>
      </div>
    );
    cy.contains('That day :(').should('be.visible');
  });
});
