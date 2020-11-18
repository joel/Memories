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

describe('BadMemories', () => {
    it('mount component', () => {
      mount(
        <div className='ion-page'>
          <BadMemories />
        </div>
      );
      cy.contains('Bad Memories').should('be.visible');
    }); 
});