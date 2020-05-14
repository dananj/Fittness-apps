<template>
  <v-container>
    <v-row>
      <v-col v-for="data in myJson" :key="data.personalId" cols="12">
        <v-checkbox :label="data.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let url = "http://localhost:3000/pwo";
import axios from "axios";

export default {
  data() {
    return {
      myJson: [],
      checked: [],
    };
  },
  async mounted() {
    // await data dari url yang
    await axios
      .get(url)
      .then((result) => {
        this.myJson = result.data.Personal;
      })
      .catch((err) => {
        console.warn(err);
      });
  },
};
</script>
