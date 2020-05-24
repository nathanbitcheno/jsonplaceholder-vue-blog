<template>
  <div class="wrapper">
    <h1>// Latest Posts</h1>
    <div v-if="!loading" class="posts">
      <div v-for="(post, index) in posts" class="post" :key="index">
        <h2>{{ post.id }}. {{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <router-link :to="`/post/?post=${post.id}`">Go to post</router-link>
      </div>
      <div class="pagination">
        <p>Page {{ this.page }} of {{ this.totalPages }}</p>
        <button v-if="this.page > 1" @click="firstPage">First</Button>
        <button v-if="this.page > 1" @click="previousPage">Previous</button>
        <button v-if="this.page < this.totalPages" @click="nextPage">Next</button>
        <button @click="lastPage">Last</Button>
      </div>
    </div>
    <div v-if="apiError" class="error">
      <h2>API error. Please try again.</h2>
    </div>
    <div v-if="loading" class="loading">
      <p><img src="@/assets/Ring-Preloader.gif" width="200px"/></p>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'PostsPage',
  data () {
    return {
      posts: '',
      apiError: false,
      loading: true,
      page: 1,
      totalPages: ''

    }
  },
  methods: {
    // Pagination Controls
    firstPage () {
      this.loading = true
      this.page = 1
      this.refresh()
    },
    nextPage () {
      this.loading = true
      this.page++
      this.refresh()
    },
    previousPage () {
      this.loading = true
      this.page--
      this.refresh()
    },
    lastPage () {
      this.loading = true
      this.page = this.totalPages
      this.refresh()
    },
    refresh () {
      axios.get('posts?_page=' + this.page).then(response => {
        this.posts = response.data
        this.loading = false
      })
    }
  },
  mounted () {
    // Mounting initial results from API
    axios.get('posts?_page=' + this.page).then(response => {
      this.posts = response.data
      this.loading = false
      axios.get('posts').then(response => {
        // Set total page count based on 10 items per page
        this.totalPages = response.data.length / 10
        console.log(this.totalPages)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-transform: capitalize;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.posts {
  margin-top: 60px;
}
.post {
  margin-bottom: 60px;
  text-align: left;
}
.loading {
  margin-top: 200px;
}
</style>
