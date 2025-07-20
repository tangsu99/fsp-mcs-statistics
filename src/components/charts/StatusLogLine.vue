<template>
  <!-- <DatePicker></DatePicker> -->
  <v-chart class="base-chart-box" :option="option" autoresize />
</template>

<script setup lang="ts">
import VChart, { THEME_KEY } from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts/types/dist/option'
import { getStatuslog } from '@/apis/api'
import type { StatusLogResponse } from '@/types/responseType'
import { provide, ref } from 'vue'

use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  DataZoomComponent,
])

provide(THEME_KEY, 'chalk')

const option = ref<EChartsOption>({
  tooltip: {
    trigger: 'axis',
    formatter: '{b} {a} {c} 人',
    axisPointer: {
      animation: true,
    },
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true,
      },
    },
  },
  title: {
    text: '在线统计',
  },
  xAxis: {
    type: 'category',
    data: [],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '在线',
      data: [],
      type: 'line',
    },
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
      minSpan: 5,
    },
    {
      start: 0,
      end: 100,
      minSpan: 5,
    },
  ],
})

const fetchData = () => {
  getStatuslog().then((response) => {
    const data: StatusLogResponse = response.data
    option.value.xAxis.data = data.date
    option.value.series[0].data = data.count
  })
}

fetchData()
</script>

<style></style>
