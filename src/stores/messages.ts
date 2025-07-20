import { defineStore } from 'pinia'
import type { SnackbarMessage } from 'vuetify/lib/components/VSnackbarQueue/VSnackbarQueue.mjs'

export const useMessagesStore = defineStore('messages', {
  state: () => {
    return {
      queue: [] as SnackbarMessage[],
    }
  },
  actions: {
    add(message: SnackbarMessage) {
      this.queue.push(message)
    },
  },
})
