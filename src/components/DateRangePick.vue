<script setup lang="ts">
import type { DateRangePayload } from '@/types/DateRangeType'
import { formattedDate } from '@/utils/dateformat'
import { mdiDelete } from '@mdi/js'
import { ref, watch } from 'vue'

const prop = defineProps({
  formatString: {
    type: String,
    default: 'yyyy-MM-dd',
    required: false,
  },
})

const model = defineModel<DateRangePayload>()

const dateRange = ref<Array<string>>([])

watch(dateRange, (newVal) => {
  if (newVal.length >= 2) {
    model.value = {
      start: format(newVal[0]),
      end: format(newVal[newVal.length - 1]),
    }
  }
})

const format = (date: string) => {
  return formattedDate(date, prop.formatString)
}

const clear = () => {
  model.value = undefined
  dateRange.value = []
}
</script>

<template>
  <v-menu transition="scale-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn variant="outlined" size="x-small" color="primary" v-bind="props">{{
        model ? `${model.start}/${model.end}` : `${prop.formatString}/${prop.formatString}`
      }}</v-btn>
      <v-btn
        variant="plain"
        size="x-small"
        @click="clear"
        :icon="mdiDelete"
        :disabled="model ? false : true"
      />
    </template>
    <v-date-picker v-model="dateRange" multiple="range" :max="Date()" hide-header elevation="4" />
  </v-menu>
</template>
