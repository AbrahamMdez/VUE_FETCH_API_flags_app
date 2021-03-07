<template>
  <main class="row">
      <section 
        class="col-12"
        v-for="countrie in countries" :key="countrie.name"
      >
          <Card :countrie="countrie" />
      </section>
  </main>
</template>

<script>
import Card from './Card'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'Carlist',

    components: {
      Card
    },

    setup() {

      const store = useStore()

      const countries = computed(() => {
        return store.getters.topCountriesPoblation
      })

      onMounted(() => {
        store.dispatch('getCountries')
      })

      return { countries }
    }

}
</script>

<style>

</style>