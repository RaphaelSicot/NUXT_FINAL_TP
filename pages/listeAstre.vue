<template>
  <div class="listeAstre">
    <div class="filter">
      <button class="button" @click="getAllAstres">
        <span>Tout les astres</span>
      </button>
      <button class="button" @click="getMoon">
        <span> Lunes </span>
      </button>
      <button class="button" @click="getPlanet">
        <span>Planète</span>
      </button>
    </div>

    <div v-for="(item, index) of astres" :key="index" class="block">
      <nuxt-link :to="{ name: 'details', params: { astre: item.id } }">
        {{ item.name }}
      </nuxt-link>
      <div class="item" @click="addFavourite(item)">
        <nuxt-link :to="{ name: 'favoris', params: { astre: item.id } }">
          <svg fill="currentColor" stroke="#fbbf24" class="h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "defaut",
  name: "listeAstre",
  components: {},
  data: function () {
    return {
      astres: [],
      list: [],
    };
  },
  methods: {
    getAllAstres: function () {
      this.astres = { ...this.list };
    },
    getMoon: function () {
      this.astres = this.list.filter((astre) => !astre.isPlanet);
    },
    getPlanet: function () {
      this.astres = this.list.filter((astre) => astre.isPlanet);
    },
    addFavourite: function (astre) {
      this.$store.commit("add", astre);
      this.$toast.success("Astre ajouté au favoris").goAway(3000);
    },
    removeFavourite: function (astre) {
      this.$store.commit("remove", astre);
    },
  },
  mounted() {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((reponse) => {
        this.list = reponse.data.bodies;
        this.astres = { ...this.list };
      });
  },
};
</script>

<style>
.listeAstre {
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fbbf24;
  justify-content: center;
  color: #111827;
  flex-wrap: wrap;
}
.filter {
  display: flex;
  justify-content: center;
}
.item {
  display: flex;
  color: #fbbf24;
}

.button {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #111827;
  color: #fbbf24;
  margin: 15px;
  border-color: #fbbf24;
  border-width: thick;
}
.block {
  display: flex;
  background-color: #111827;
  margin: 10px;
  width: 200px;
}
</style>