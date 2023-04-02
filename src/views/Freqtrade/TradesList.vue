<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>TradesList</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div>
        <!-- <TradeList
      class="open-trades"
      :trades="openTrades"
      title="Open trades"
      :active-trades="true"
      empty-text="Currently no open trades."
    /> -->
        <CustomTradeList
          v-if="!history && !botStore.activeBot.detailTradeId"
          :trades="botStore.activeBot.openTrades"
          title="Open trades"
          :active-trades="true"
          :stake-currency-decimals="botStore.activeBot.stakeCurrencyDecimals"
          empty-text="No open Trades."
        />
        <CustomTradeList
          v-if="history && !botStore.activeBot.detailTradeId"
          :trades="botStore.activeBot.closedTrades"
          title="Trade history"
          :stake-currency-decimals="botStore.activeBot.stakeCurrencyDecimals"
          empty-text="No closed trades so far."
        />
        <div
          v-if="
            botStore.activeBot.detailTradeId && botStore.activeBot.tradeDetail
          "
          class="d-flex flex-column"
        >
          <b-button
            size="sm"
            class="align-self-start mt-1 ms-1"
            @click="botStore.activeBot.setDetailTrade(null)"
            ><BackIcon /> Back</b-button
          >
          <TradeDetail
            :trade="botStore.activeBot.tradeDetail"
            :stake-currency="botStore.activeBot.stakeCurrency"
          />
        </div>
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
import CustomTradeList from "@/components/ftbot/CustomTradeList.vue";
import TradeDetail from "@/components/ftbot/TradeDetail.vue";
import BackIcon from "vue-material-design-icons/ArrowLeft.vue";
import { useBotStore } from "@/stores/ftbotwrapper";

const props = defineProps({
  history: { default: false, type: Boolean },
});

const botStore = useBotStore();
</script>
