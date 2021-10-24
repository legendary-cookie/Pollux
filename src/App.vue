<template>
  <div class="app-container p-3 bg-black m-auto">
    <SongList v-bind:list="list"/>
  </div>
</template>

<script>
import SongList from "./components/SongList.vue";

export default {
  name: "App",
  components: {
    SongList
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    setInterval(this.refresh(), 500 * 1000);
  },
  methods: {
    refresh() {
      fetch("http://localhost:3000/songs?amount=50")
        .then(response => response.json())
        .then(data => (this.list = data));
    }
  }
};
</script>

<style>
.app-container {
  /* Fill out screen */
  min-height: 100vh;
}
/* Standard #app sstuff */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
