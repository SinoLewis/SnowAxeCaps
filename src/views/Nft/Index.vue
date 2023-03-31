<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/nft/bids">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Bids</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/nft/trades">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Trades</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/nft/markets">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Markets</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
