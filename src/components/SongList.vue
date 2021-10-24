<template>
  <div>
    <button v-on:click="refresh">
      <p class="text-gray-400">Refresh</p>
    </button>
    <div class="text-yellow-400 font-bold text-center text-3xl mb-7 mt-3">
      Music Player
    </div>
    <div
      v-for="(song, songIndex) in list"
      v-bind:key="song.id"
      class="flex flex-row justify-start mb-4 cursor-pointer"
      v-on:click="playSong(songIndex)"
    >
      <img class="max-h-12 rounded" v-bind:src="song.image" />
      <div class="pl-2">
        <span class="text-yellow-300">{{ song.name }}</span>
        <br />
        <span class="text-gray-200 text-xs">
          {{ song.artist }} -
          <span class="text-gray-400"> {{ song.album }} ({{ song.year }})</span>
        </span>
      </div>
    </div>
  </div>
  <div v-if="isPlayerVisible">
    <SongPlayer
      v-bind:song="list[currentSongIndex]"
      @goback="isPlayerVisible = !isPlayerVisible"
      @next="playNext"
      @previous="playPrevious"
    />
  </div>
</template>

<script>
import SongPlayer from "./SongPlayer.vue";
export default {
  data() {
    return {
      isPlayerVisible: false,
      currentSongIndex: 0
    };
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      this.isPlayerVisible = true;
    },
    playNext() {
      if (this.currentSongIndex < this.list.length - 1) {
        this.currentSongIndex += 1;
      } else {
        this.currentSongIndex = 0;
      }
    },
    playPrevious() {
      if (this.currentSongIndex != 0) {
        this.currentSongIndex -= 1;
      } else {
        this.currentSongIndex = this.list.length - 1;
      }
    }
  },
  components: {
    SongPlayer
  },
  name: "SongList"
};
</script>
