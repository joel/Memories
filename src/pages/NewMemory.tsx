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
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { camera } from 'ionicons/icons';

import { Plugins } from '@capacitor/core';
import { useCamera } from '@ionic/react-hooks/camera';

import '../theme/NewMemory.css';

const { CameraResultType, CameraSource } = Plugins;
// import { CameraResultType, CameraSource } from '@capacitor/core';

const NewMemory: React.FC = () => {
  const { getPhoto } = useCamera();

  const [takenPhoto, setTakenPhoto] = useState<{
    path: string;
    preview: string;
  }>();

  const takePhotoHandler = async () => {
    console.log('takePhotoHandler');
    
    const photo = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 500,
    });
    
    console.log(photo);

    if (!photo || !photo.path || !photo.webPath) {
      console.log('We do not get a photo, RETURN');
      return;
    }

    console.log('We get a photo');

    setTakenPhoto({
      path: photo.path,
      preview: photo.webPath
    });
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
                {takenPhoto && <img src={takenPhoto.preview} alt='Preview'/>}
              </div>
              <IonButton fill='clear' onClick={takePhotoHandler}>
                <IonIcon icon={camera} slot='start' />
                <IonLabel>Take Photo</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-margin-top'>
            <IonCol className='ion-text-center'>
              <IonButton>Add Memory</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
