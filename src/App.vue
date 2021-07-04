<template>
  <v-app>
      <navigation/>
      <v-content>
        <router-view/>
      </v-content>
  </v-app>
</template>

<script>
import Navigation from './views/navigation/Navigation.vue'

export default {
    components: {
      'navigation': Navigation
    },    
  }
</script>
