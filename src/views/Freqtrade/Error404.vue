<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>No Page found</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div>
        <h1 class="mb-5">404 Error.</h1>
        <p class="h4">
          Ahhhhhhhh! The page you are looking for does not exist.
        </p>
        <p>
          Don't worry, you can head back to
          <router-link to="/"> <span>the main page</span> </router-link>.
        </p>
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
</script>
