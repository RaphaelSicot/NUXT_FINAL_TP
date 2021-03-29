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
            <button @click="openMoon(lune.moon)">{{ lune.moon }}</button>

            <nuxt-link
              :to="{ name: 'details', params: { astre: lune.moon } }"
              >{{ lune.moon }}</nuxt-link
            >
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
  name: "detail",
  data: function () {
    return {};
  },

  async asyncData({ params }) {
    const astre = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/" + params.astre
    ).then((res) => res.json());
    return {
      astre,
    };
  },

  methods: {
    openMoon({ params }, luneId) {
      // params.astre = luneId;
      //this.$forceUpdate();
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