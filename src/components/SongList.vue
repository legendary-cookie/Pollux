<template>
    <div v-if="!isPlayerVisible">
        <div class="text-yellow-300 font-bold text-center text-3xl mb-7 mt-3">
            Cosmo Music Player
        </div>
        <div
            v-for="(song, songIndex) in list" v-bind:key="song.id"
            class="flex flex-row justify-between mb-4 cursor-pointer"
            v-on:click="playSong(songIndex)"
        >
            <div>
                <span class="text-yellow-300">{{ song.name }}</span>
                <br />
                <span class="text-gray-200 text-xs">
                    {{ song.artist }} - 
                    <span class="text-gray-400"> {{ song.album }} ({{ song.year }})</span>
                </span>
            </div>
            <div>
                <img
                    class="max-h-12 rounded"
                    v-bind:src="song.image"
                />
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
import SongPlayer from './SongPlayer.vue';
export default {
    data () {
        return {
            isPlayerVisible: false,
            currentSongIndex: 0,
            list: [
                {
                    id: 1,
                    name: 'Cheap Thrills',
                    artist: 'Adam Lambert',
                    album: 'Everything',
                    year: 2021,
                    image: `https://source.unsplash.com/random/400x400?date=1`,
                    audiosource: `https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3`
                }
            ]
        }
    },
    methods: {
        playSong (index) {
            this.currentSongIndex = index;
            this.isPlayerVisible = true;
        },
        playNext () {
            if (this.currentSongIndex < this.list.length - 1) {
                this.currentSongIndex += 1;
            } else {
                this.currentSongIndex = 0;
            }
        },
        playPrevious () {
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
    name: 'SongList'
}
</script>
