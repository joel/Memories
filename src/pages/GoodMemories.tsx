import React, { useContext } from 'react';

import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';

import { add } from 'ionicons/icons';

import MemoriesContext from '../data/memories-context';

const GoodMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const goodMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === 'good'
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Good Memories</IonTitle>
          {isPlatform('ios') && (
            <IonButtons slot='end'>
              <IonButton routerLink='/new-memory' id='new-memory-button'>
                <IonIcon slot='icon-only' icon={add} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {goodMemories.length === 0 && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No good memories found.</h2>
              </IonCol>
            </IonRow>
          )}

          {goodMemories.map((memory) => (
            <IonRow id={memory.id}>
              <IonCol>
                <IonCard>
                  <img src={memory.imagePath} alt={memory.title} />
                  <IonCardHeader>
                    <IonCardTitle>{memory.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}

        </IonGrid>
        {!isPlatform('ios') && (
          <IonFab vertical='bottom' horizontal='end'>
            <IonFabButton routerLink='/new-memory' id='new-memory-button'>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GoodMemories;
