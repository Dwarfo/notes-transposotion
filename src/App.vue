<template>
  <notelist-links></notelist-links>
  <router-view></router-view>
</template>

<script>

//import NoteSymbol from './components/NoteSymbol.vue'
//import FullNoteSheet from './components/FullNoteSheet.vue'
import NoteListLinks from './components/NoteListLinks.vue'



export default {
  name: 'App',
  components: {
    'notelist-links': NoteListLinks
  }
}
</script>

<style>

</style>
