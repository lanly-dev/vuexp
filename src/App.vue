<template lang="pug">
  v-app: v-main
    v-row: v-col.text-center
      v-btn(on-click='newWin("dn")') drag-new
      v-btn(on-click='newWin("dnd")') dnd
      v-btn(on-click='newWin("bt")') bluetooth
</template>

<script lang="ts">
import Vue from 'vue'
import { ipcRenderer } from 'electron'

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
  methods: {
    newWin(name: string) {
      ipcRenderer.send('newWin', name)
    }
  }
})
</script>
