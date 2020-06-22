<template lang='pug'>
  v-container
    div: p#drag(draggable) Item1
    div: p#drag2(draggable) Item2
</template>

<script lang='ts'>
import Vue from 'vue'
import { ipcRenderer } from 'electron'

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({}),

  mounted: () => {
    const a = document.getElementById('drag')
    const b = document.getElementById('drag2')

    a.addEventListener('dragstart', e => {
      e.preventDefault()
      ipcRenderer.send('ondragstart', '/path/to/item')
    })

    b.addEventListener('dragend', e => {
      ipcRenderer.send('ondragend', '/path/to/item')
    })
  }
})
</script>
