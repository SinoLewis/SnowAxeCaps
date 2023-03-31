<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Freqtrade Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Freqtrade Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Freqtrade Dashboard</h2>
      <ExploreContainer name="Freqtrade Dashboard stuff" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
</script>
