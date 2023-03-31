<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Freqtrade Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Freqtrade Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Freqtrade Login</h2>
      <ExploreContainer name="Freqtrade Login stuff" />
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
