<template>
  <ion-page>
    <ion-tabs>
      <bot-alerts></bot-alerts>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/freqtrade/bots">
          <ion-icon :icon="playCircle" />
          <ion-label>Bots</ion-label>
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
import { setTimezone } from "@/shared/formatters";
import { onMounted, watch } from "vue";
import { useSettingsStore } from "@/stores/settings";
import BotAlerts from "@/components/ftbot/BotAlerts.vue";

const settingsStore = useSettingsStore();

onMounted(() => {
  setTimezone(settingsStore.timezone);
  // console.log("Freqtrade Index Onmounted hook: ", settingsStore.timezone);
});

watch(
  () => settingsStore.timezone,
  (tz) => {
    console.log("timezone changed", tz);
    // console.log("Freqtrade Index Watch hook");
    setTimezone(tz);
  }
);
</script>