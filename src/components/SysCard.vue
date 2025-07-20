<script setup lang="ts">
import { getSys } from '@/apis/sys'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const cpu = ref<number>(0)
const mem = ref<number>(0)

const fatchSysInfo = async () => {
  try {
    const res = await getSys()
    const { cpu: _cpu, memory } = res.data
    // const now = new Date(timestamp).toLocaleTimeString()

    cpu.value = _cpu
    mem.value = memory
  } catch (e) {
    console.error(e)
  }
}

let interval = -1
onMounted(() => {
  fatchSysInfo()
  interval = setInterval(() => {
    fatchSysInfo()
  }, 2000)
})
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <v-row>
    <v-col sm="12" md="12">
      <v-sheet rounded="lg" :elevation="8" class="h-100 pa-4 d-flex justify-center align-center">
        <v-progress-circular
          :model-value="cpu"
          :rotate="180"
          :size="100"
          :width="15"
          color="primary"
        >
          CPU<br />
          {{ cpu ? `${cpu}%` : '加载中' }}
        </v-progress-circular>
      </v-sheet>
    </v-col>
    <v-col sm="12" md="12">
      <v-sheet rounded="lg" :elevation="8" class="h-100 pa-4 d-flex justify-center align-center">
        <v-progress-circular :model-value="mem" :rotate="180" :size="100" :width="15" color="teal">
          MEM<br />
          {{ mem ? `${mem}%` : '加载中' }}
        </v-progress-circular>
      </v-sheet>
    </v-col>
  </v-row>
</template>
