<template>
  <main class="container">
    <h1 class="text-center">Paises Api</h1>
    <Continents />
    <Search />
    <CardList />
  </main>
</template>

<script>
import CardList from './components/CardList';
import Continents from './components/Continents';
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    CardList,
    Continents,
    Search
  }
}
</script>

<style>

</style>
