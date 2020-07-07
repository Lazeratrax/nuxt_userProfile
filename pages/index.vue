<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="section-about">
            <v-card class="elevation-4 wrapper">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>My Profile</v-toolbar-title>
              </v-toolbar>

              <v-card-text class="wrapper-content">
                <img
                  class="section-about__avatar"
                  :src="randomizer[2]"
                  alt="avatar"
                />

                <p class="section-about__paragraph">
                  <b>Name: </b>
                  <strong id="example">{{ randomizer[0] }}</strong>
                  <br />
                  <b>Email: </b> <strong>{{ randomizer[1] }}</strong>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.section-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  color: white;
}

.wrapper-content {
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  border-radius: 5px;
  color: black;
}

.section-about__title {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid grey;
  margin: 0;
}

.section-about__avatar {
  border-radius: 50%;
  border: 5px solid grey;
  width: 200px;
  height: 200px;
}

.section-about__paragraph {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
}
</style>

<script>
var faker = require("faker");

export default {
  computed: {
    randomizer() {
      let randomName = faker.name.firstName();
      let randomEmail = faker.internet.email();
      let randomPhoto = faker.internet.avatar();
      let arrM = [randomName, randomEmail, randomPhoto];
      return arrM;
    }
  }
};
</script>
