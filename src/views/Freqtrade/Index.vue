<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/freqtrade/login">
          <ion-icon :icon="playCircle" />
          <ion-label>Login</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/freqtrade/trade">
          <ion-icon :icon="playCircle" />
          <ion-label>Trade</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/freqtrade/dashboard">
          <ion-icon :icon="radio" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/freqtrade/charts">
          <ion-icon :icon="library" />
          <ion-label>Charts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/freqtrade/logs">
          <ion-icon :icon="search" />
          <ion-label>Logs</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
  
<script setup lang="ts">
import {
  IonContent,
  IonTitle,
  IonFooter,
  IonPage,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import { playCircle, radio, library, search } from "ionicons/icons";
</script>