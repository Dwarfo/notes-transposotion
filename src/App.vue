<template>
  <the-nav></the-nav>
  <router-view></router-view>
</template>

<script>

//import NoteSymbol from './components/NoteSymbol.vue'
//import FullNoteSheet from './components/FullNoteSheet.vue'
import TheNavigation from './components/TheNavigation.vue'



export default {
  name: 'App',
  components: {
    'the-nav': TheNavigation
  }
}
</script>

<style>

</style>
