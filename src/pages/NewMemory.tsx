import React, { useState } from 'react';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { camera } from 'ionicons/icons';

import { Plugins, CameraResultType, FilesystemDirectory, Filesystem, CameraSource } from '@capacitor/core';

import { base64FromPath } from '@ionic/react-hooks/filesystem';

import '../theme/NewMemory.css';

const { Camera } = Plugins;

const NewMemory: React.FC = () => {
  const [takenPhoto, setTakenPhoto] = useState<{
    path?: string;
    preview: string;
  }>();
  const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>();

  const takePhotoHandler = async () => {
    console.log('takePhotoHandler');
    
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      quality: 80,
      source: CameraSource.Camera
    });
    
    console.log(photo);

    if (!photo || !photo.webPath) {
      console.log('We do not get a photo, RETURN');
      console.log('photo.path: [' + photo.path + ']');
      console.log('photo.webPath: [' + photo.webPath + ']');
      return;
    }

    console.log('We get a photo');

    setTakenPhoto({
      path: photo.path,
      preview: photo.webPath
    });
  };

  const addMemoryHandler = async () => {
    const fileName = new Date().getTime().toString() + '.jpeg';

    const data = await base64FromPath(takenPhoto!.preview);

    Filesystem.writeFile({
      path: fileName,
      data: data,
      directory: FilesystemDirectory.Data,
    });
  };

  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start' id='back-button'>
            <IonBackButton defaultHref='/good-memories' />
          </IonButtons>
          <IonTitle>Add New Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>New Memory</IonLabel>
                <IonInput type='text'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='ion-text-center'>
            <IonCol>
              <div className='image-preview'>
                {!takenPhoto && <h3>No Photo Chosen.</h3>}
                {takenPhoto && <img src={takenPhoto.preview} alt='Preview' />}
              </div>
              <IonButton fill='clear' onClick={takePhotoHandler}>
                <IonIcon icon={camera} slot='start' />
                <IonLabel>Take Photo</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-margin-top'>
            <IonCol className='ion-text-center'>
              <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSelect
                value='good'
                placeholder='Select One'
                onIonChange={selectMemoryTypeHandler}
              >
                <IonSelectOption value='good'>Good Memory</IonSelectOption>
                <IonSelectOption value='bad'>Bad Memory</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
