<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Fireshop Orders</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Fireshop Orders</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Fireshop Orders</h2>
      <ExploreContainer name="Fireshop Orders stuff" />
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
