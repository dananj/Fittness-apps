<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Personal Workout</v-card-title>

            <router-link to="/PersonalWorkOut">
              <v-btn color="pink" dark absolute bottom right>
                <v-icon>mdi-plus</v-icon></v-btn
              >
            </router-link>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Heroes Workout </v-card-title>

            <router-link to="/HeroesWorkOut">
              <v-btn color="pink" dark absolute bottom right>
                <v-icon>mdi-plus</v-icon></v-btn
              >
            </router-link>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
