<template>
  <main class="card mb-2">
      <section class="card-body">
          <h5>{{countrie.name}}</h5>
          <p class="text-center">
              <img :src="countrie.flag" :alt="`Bandera-${countrie.name}`" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge bg-dark d-block mb-1">Pais: {{countrie.nativeName}}</span>
              <span class="badge bg-info p-3 d-block mb-1">Poblacion: {{numberFormat(countrie.population)}}</span>
              <span class="badge bg-dark d-block mb-1">Capital: {{countrie.capital}}</span>
              <span class="badge bg-dark d-block mb-1">Region: {{countrie.region}}</span>
          </p>
      </section>
  </main>
</template>

<script>
export default {
    props: ['countrie'],

    setup() {
        const numberFormat = (num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return { numberFormat }
    }
}
</script>

<style>

</style>