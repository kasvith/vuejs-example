<template>
  <section class="container">
    <div class="notification is-info" :class="{ 'is-danger': error }" v-show="show">
      <button class="delete" @click="show = false"></button>
      {{ result }}
    </div>
    <div class="field">
      <div class="control">
        <input class="input is-primary" type="text" placeholder="Enter a word" v-model="text">
      </div>
    </div>
    <div class="control">
      <button class="button is-primary" @click="capitalize">Capitalize</button>
    </div>

  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: null,
      show: false,
      result: null,
      error: false,
    };
  },

  methods: {
    capitalize() {
      const self = this;
      axios.post('http://localhost:3000/api/capitalize', {
        text: self.text,
      }).then((res) => {
        self.error = false;
        self.result = res.data.text;
        self.show = true;
      }).catch((err) => {
        self.show = true;
        self.error = true;
        self.result = err.response.data.message;
      });
    },
  },
};
</script>

<style>
  .container{
    padding: 20px
  }
</style>
