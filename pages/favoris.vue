<template>
  <div class="favourite h-screen">
    <div class="filter">
      <button class="button" @click="getAllAstres">
        <span>Tout</span>
      </button>
      <button class="button" @click="getMoon">
        <span>Lune</span>
      </button>
      <button class="button" @click="getPlanet">
        <span>Planète</span>
      </button>
    </div>

    <div v-for="(item, index) of astres" :key="index" class="astres">
      <div class="grid grid-cols-2">
        <h2 class="item">{{ item.name }}</h2>
        <svg
          fill="currentColor"
          stroke="#fbbf24"
          xmlns="http://www.w3.org/2000/svg"
          @click="removeFavourite(item)"
        >
          <path
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "defaut",
  name: "favoris",
  components: {},
  data: function () {
    return {
      astres: [],
    };
  },
  methods: {
    getAllAstres: function () {
      this.astres = this.$store.state.favouriteList;
    },
    getMoon: function () {
      this.astres = this.$store.state.favouriteList.filter(
        (astre) => !astre.isPlanet
      );
    },
    getPlanet: function () {
      this.astres = this.$store.state.favouriteList.filter(
        (astre) => astre.isPlanet
      );
    },
    removeFavourite: function (astre) {
      this.$store.commit("remove", astre);
      this.$toast.error("Astre supprimé des favoris").goAway(3000);
    },
  },
  mounted() {
    this.astres = this.$store.state.favouriteList;
  },
};
</script>

<style>
.favourite {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fbbf24;
  justify-content: center;
  color: #111827;
}

.filter {
  display: flex;
  justify-content: center;
}
.item {
  display: flex;
  color: #fbbf24;
  justify-content: space-between;
}

.button {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #111827;
  color: #fbbf24;
  height: 50px;
  margin: 15px;
  border-color: #fbbf24;
  border-width: thick;
}
.astres {
  display: flex;
  background-color: #111827;
  color: #fbbf24;
  justify-content: center;
  margin: 5px;
  width: 200px;
  height: 50px;
  flex-wrap: wrap;
}
</style>