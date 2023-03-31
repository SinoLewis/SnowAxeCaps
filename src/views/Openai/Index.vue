<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="freqai" href="/openai/freqai">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Freqai</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="advisor" href="/openai/advisor">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Advisor</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="embeddings" href="/openai/embeddings">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Embeddings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
