<template>
  <main class="card">
      <section class="card-body">
          <h5>{{countrie.name}}</h5>
          <p class="card-text">
              <span class="badge bg-dark d-block mb-1">{{countrie.nativeName}}</span>
              <span class="badge bg-info p-3 d-block mb-1">{{countrie.population}}</span>
              <span class="badge bg-dark d-block mb-1">{{countrie.capital}}</span>
              <span class="badge bg-dark d-block mb-1">{{countrie.region}}</span>
          </p>
      </section>
  </main>
</template>

<script>
export default {
    props: ['countrie'],

    setup() {
        const numberFormat = (num)
    }
}
</script>

<style>

</style>