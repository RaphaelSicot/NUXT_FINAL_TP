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
      astre: Object,
    };
  },
  created() {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((reponse) => {
        this.astre = reponse.data.bodies.find(
          (item) => item.id === this.$route.params.astre
        );
        console.log(this.astre);
      });
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