<script setup lang="ts">
import StatusLogLine from '@/components/charts/StatusLogLine.vue'
import DateRangePick from '@/components/DateRangePick.vue'
import type { DateRangePayload } from '@/types/DateRangeType'
import { ref } from 'vue'

const dateRange = ref<DateRangePayload>()
</script>

<template>
  <status-log-line />
  <date-range-pick v-model="dateRange" />
</template>
