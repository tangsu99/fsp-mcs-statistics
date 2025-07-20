<script setup lang="ts">
import StatusLogLine from '@/components/charts/StatusLogLine.vue'
// import DateRangePick from '@/components/DateRangePick.vue'
import SysCard from '@/components/SysCard.vue'
// import type { DateRangePayload } from '@/types/DateRangeType'
// import { ref } from 'vue'

// const dateRange = ref<DateRangePayload>()
</script>

<template>
  <!-- <status-log-line />
  <date-range-pick v-model="dateRange" /> -->
  <v-row>
    <v-col cols="12" md="4" sm="4" xl="2" class="d-flex">
      <sys-card></sys-card>
    </v-col>
    <v-col cols="12" md="8" sm="8" xl="10">
      <v-sheet rounded="lg" :elevation="8" class="pa-4">
        <status-log-line />
        <!-- <date-range-pick v-model="dateRange" /> -->
      </v-sheet>
    </v-col>
    <v-col cols="5">
      <v-sheet rounded="lg" :elevation="8" class="pa-4" style="max-lines: 5"> 1234 </v-sheet>
    </v-col>
  </v-row>
</template>
