<template>
  <div class="favourite h-screen">
    <div class="filter ml-10 mr-10 mb-5">
      <button class="button" @click="displayAll">
        <span>Tout</span>
      </button>
      <button class="button" @click="displayMoon">
        <span>Lune</span>
      </button>
      <button class="button" @click="displayPlanet">
        <span>Planète</span>
      </button>
    </div>

    <div v-for="(item, index) of astres" :key="index" class="block">
      <div class="grid grid-cols-2">
        <h2 class="font-bold text-xl">{{ item.name }}</h2>
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
  name: "Favourite",
  components: {},
  data: function () {
    return {
      astres: [],
    };
  },
  methods: {
    displayAll: function () {
      this.astres = this.$store.state.favouriteList;
    },
    displayMoon: function () {
      this.astres = this.$store.state.favouriteList.filter(
        (astre) => !astre.isPlanet
      );
    },
    displayPlanet: function () {
      this.astres = this.$store.state.favouriteList.filter(
        (astre) => astre.isPlanet
      );
    },
    removeFavourite: function (astre) {
      this.$store.commit("remove", astre);
    },
  },
  mounted() {
    this.astres = this.$store.state.favouriteList;
  },
};
</script>

<style>
.favourite {
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
.block {
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