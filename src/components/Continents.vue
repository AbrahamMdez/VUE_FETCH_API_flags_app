import { useStore } from 'vuex';
<template>
  <main class="text-center">
        <h3>Filtrar por continent</h3>

        <section class="brn-group mb-3">
            <button class="btn btn-dark" @click="filter('Americas')">AM</button>
            <button class="btn btn-dark" @click="filter('Europe')">EU</button>
            <button class="btn btn-dark" @click="filter('Asia')">AS</button>
            <button class="btn btn-dark" @click="filter('Oceania')">OC</button>
            <button class="btn btn-dark" @click="filter('Africa')">AF</button>
            <button class="btn btn-dark" @click="filter('')">ALL</button>
        </section>
  </main>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const filter = (region) => {
            store.dispatch('filterRegion', region)
        }

        return { filter }
    }
}
</script>

<style>

</style>