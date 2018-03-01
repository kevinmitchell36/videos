

<template>
  <div class="videos">
    

     <div v-for="video in videos">
      <p>
        <span><b>{{ video.title }}</b></span><br />
        <span><b>{{ video.description }}</b></span><br />
        <span><b>{{ video.url }}</b></span<br />
      </p>
    </div>
  </div>
</template>

<script>
import VideosService from '@/services/VideosService'
export default {
  name: 'videos',
  data () {
    return {
      videos: []
    }
  },
  mounted () {
    this.getVideos()
  },
  methods: {
    async getVideos () {
      const response = await VideosService.fetchVideos()
      this.videos = response.data
    }
  }
}
</script>