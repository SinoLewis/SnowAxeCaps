<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>LoginView</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <b-card header="Freqtrade bot Login">
          <Login ref="loginForm" />
        </b-card>
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
import Login from "@/components/Login.vue";
</script>

<style scoped>
.container {
  max-width: 520px;
}
</style>

