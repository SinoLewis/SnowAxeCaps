<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Fireshop Deliveries</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Fireshop Deliveries</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Fireshop Deliveries</h2>
      <ExploreContainer name="Fireshop Deliveries stuff" />
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
import { onMounted } from "vue";

onMounted(() => {
  console.log("Fireshop Deliveries mounted");
});
</script>
