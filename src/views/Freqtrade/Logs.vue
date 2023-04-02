<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Freqtrade Logs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Freqtrade Logs</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Freqtrade Logs</h2>
      <div class="p-4 h-100">
        <LogViewer />
      </div>
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
import LogViewer from "@/components/ftbot/LogViewer.vue";
</script>
