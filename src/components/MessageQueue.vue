<template>
  <v-snackbar-queue v-model="messages.queue"></v-snackbar-queue>
</template>

<script setup lang="ts">
import { useMessagesStore } from '@/stores/messages'

const messages = useMessagesStore()
</script>
