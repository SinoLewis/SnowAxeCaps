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
      <div class="home">
        <div class="d-flex justify-content-center">
          <bot-list />
          <login-modal
            v-if="!small"
            ref="loginModal"
            class="mt-2"
            login-text="Add new bot"
          />
        </div>
        <hr />
        <!-- <img alt="Freqtrade logo" src="../assets/freqtrade-logo.png" width="450px" class="my-5" /> -->
        <!-- <div title="Freqtrade logo" class="logo-svg my-5 mx-auto" />
        <div>
          <h1>Welcome to the Freqtrade UI</h1>
        </div>
        <div>This page allows you to control your trading bot.</div>
        <br />
        <p>
          If you need any help, please refer to the
          <a href="https://www.freqtrade.io/en/latest/"
            >Freqtrade Documentation</a
          >.
        </p>

        <p>Have fun - <i>wishes you the Freqtrade team</i></p> -->
      </div>
      <ExploreContainer name="This page allows you to control your trading bot." />
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
import BotList from "@/components/BotList.vue";
import LoginModal from "@/views/Freqtrade/LoginModal.vue";
</script>
