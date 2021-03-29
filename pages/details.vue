<template>
  <div class="details h-screen">
    <div>
      <center>
        <h1>Informations sur {{ astre.name }}</h1>
      </center>

      <table>
        <thead>
          <tr>
            <th>Caractéristique</th>
            <th>Valeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom</td>
            <td>
              {{ astre.name }}
            </td>
          </tr>
          <tr>
            <td>Nom (anglais)</td>
            <td>
              {{ astre.englishName }}
            </td>
          </tr>
          <tr>
            <td>Planète</td>
            <td>
              {{ astre.isPlanet ? "Oui" : "Non" }}
            </td>
          </tr>
          <tr>
            <td>Axe semis majeur</td>
            <td>
              {{ astre.semimajorAxis }}
            </td>
          </tr>
          <tr>
            <td>Périhélie</td>
            <td>
              {{ astre.perihelion }}
            </td>
          </tr>
          <tr>
            <td>Aphélion</td>
            <td>
              {{ astre.aphelion }}
            </td>
          </tr>
          <tr>
            <td>Excentricité</td>
            <td>
              {{ astre.eccentricity }}
            </td>
          </tr>
          <tr>
            <td>Inclinaison</td>
            <td>
              {{ astre.inclination }}
            </td>
          </tr>
          <tr>
            <td>Densité</td>
            <td>
              {{ astre.density }}
            </td>
          </tr>
          <tr>
            <td>Gravité</td>
            <td>
              {{ astre.gravity }}
            </td>
          </tr>

          <tr v-for="lune in astre.moons" :key="lune.moon">
            <!-- <button @click="openMoon(lune.moon)">{{ lune.moon }}</button> -->

            <nuxt-link :to="'detail/' + lune.moon">{{ lune.moon }}</nuxt-link>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "defaut",
  name: "details",
  data: function () {
    return {
      astre: {},
    };
  },

  async created() {
    this.loadData();
  },

  methods: {
    openMoon(luneId) {
      this.$route.params.astre = luneId;
      this.loadData();
      this.$forceUpdate();
    },

    loadData() {
      this.astre = { name: "" };

      console.log(this.$route.params.astre);

      axios
        .get("https://api.le-systeme-solaire.net/rest/bodies/")
        .then((reponse) => {
          this.astre = reponse.data.bodies.find(
            (item) => item.id == this.$route.params.astre
          );
        });
      console.log(JSON.parse(JSON.stringify(this.astre)));
    },
  },
};
</script>

<style>
.details {
  display: flex;
  background-color: #fbbf24;
  color: #111827;
  justify-content: center;
}
</style>