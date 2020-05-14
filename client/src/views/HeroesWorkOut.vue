<template>
  <v-container>
    <v-text-field v-model="search" placeholder="Cari . . ."></v-text-field>
    <v-row>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            <h2>{{ data.name }}</h2>
          </v-card-title>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Excercise</th>
                  <th class="text-left">Wram Up</th>
                  <th class="text-left">Working Sets</th>
                  <th class="text-left">Rest Period</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data.training" :key="item.name">
                  <td>{{ item.exerciseName }}</td>
                  <td>{{ item.wramUp }}</td>
                  <td>{{ item.workingSet }}</td>
                  <td>{{ item.restPeriod }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-col v-for="data in filteredList" :key="data.heroId" cols="12" sm="4">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{ data.name }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{ data.detail }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="modalOpen(data)">Detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      search: "",
      postList: [],
      dialog: false,
      data: [],
    };
  },

  computed: {
    filteredList() {
      return this.postList.filter((work) => {
        return work.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.getList();
  },
  methods: {
    modalOpen(data) {
      this.dialog = true;
      this.data = data;
    },
    async getList() {
      const response = await axios.get("http://localhost:3000/hwo");
      this.postList = response.data.Heroes;
    },
  },
};
</script>
