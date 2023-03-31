<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="deliveries" href="/fireshop/deliveries">
          <ion-icon aria-hidden="true" :icon="car" />
          <ion-label>Deliveries</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="orders" href="/fireshop/orders">
          <ion-icon aria-hidden="true" :icon="cash" />
          <ion-label>Orders</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="products" href="/fireshop/products">
          <ion-icon aria-hidden="true" :icon="cart" />
          <ion-label>Products</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="users" href="/fireshop/users">
          <ion-icon aria-hidden="true" :icon="man" />
          <ion-label>Users</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { car, cash, cart, man } from "ionicons/icons";
</script>
