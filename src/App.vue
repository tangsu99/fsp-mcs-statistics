<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import LeftCard from '@/components/LeftCard.vue'
</script>

<template>
  <v-app>
    <nav-bar />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <left-card />
          </v-col>

          <v-col cols="12" md="10">
            <v-sheet min-height="70vh" rounded="lg" :elevation="8" class="pa-4">
              <RouterView />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
