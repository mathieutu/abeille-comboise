<template>
  <section id="abeille" class="py-8 bg-white border-b">
    <div class="container max-w-5xl m-8 mx-auto">
      <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 sm:text-6xl font-hand">
        L'Abeille Comboise
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-full opacity-25 bg-gradient-to-r from-red-800 via-orange-500 to-yellow-500" />
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 p-6 sm:w-1/2">
          <h2 class="mb-3 text-2xl font-bold leading-none text-gray-800 sm:text-3xl">
            Mathias Chicaud, Apiculteur au coeur des Bauges
          </h2>
          <p class="text-gray-600">
            Ingénieur de formation, je me suis lancé dans l'aventure apicole en commençant par une solide formation théorique et
            en travaillant quelque temps auprès d'apiculteurs professionnels pour apprendre les rudiments de ce métier passionnant.
            En 2019, l'Abeille Comboise (en référence aux habitantes de Bellecombe en Bauges) est créée...
          </p>
        </div>
        <div class="flex items-center w-full p-6 sm:w-1/2">
          <img
            class="object-cover w-full mx-auto rounded-lg shadow-lg sm:h-64 "
            src="/img/apiculteur.jpg"
            alt="Photo de Mathias"
          >
        </div>
      </div>


      <div class="flex flex-col-reverse flex-wrap sm:flex-row">
        <div class="flex items-center w-full p-6 mt-6 sm:w-1/2 ">
          <img
            class="object-cover w-full mx-auto rounded-lg shadow-lg sm:h-64"
            src="/img/paysage.jpg"
            alt="Photo de Bellecombe en bauge"
          >
        </div>
        <div class="w-full p-6 mt-6 sm:w-1/2">
          <div class="align-middle">
            <h3 class="mb-3 text-2xl font-bold leading-none text-gray-800 sm:text-3xl">
              Pour une apiculture plus proche des abeilles et du consommateur
            </h3>
            <p class="text-gray-600">
              Située au pied du Roc des Boeufs dans le massif des Bauges, mon exploitation est au plus proche des colonies pour leur apporter
              tout le soutien qu'elles méritent. Des techniques avancées sont employées pour assurer leur
              survie, tout en respectant le cycle de vie des abeilles. <br>
              J'élève mes propres reines afin de favoriser le développement d'une Abeille la plus adaptée à son environnement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Abeille',
}
</script>
