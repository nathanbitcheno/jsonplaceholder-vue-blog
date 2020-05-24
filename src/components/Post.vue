<template>
  <div class="wrapper">
      <div v-if="postReady" class="post">
        <h1 style="margin-left:">// {{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
      <div v-if="!postReady || !commentsReady" class="loading">
            <p><img src="@/assets/Ring-Preloader.gif" width="200px"/></p>
      </div>
      <div v-if="commentsReady" class="comments">
        <Comments :comments="comments"></Comments>
        <form v-if="!posting" class="addComment">
        <h2>// Join the Discussion</h2>
        <textarea id="newComment" cols="90" rows="10" v-model="newComment" />
        <br /><br />
        email:
        <br />
        <input type="email" id="email" v-model="email" /><br /><br />
        <button @click="createComment">Post Comment</button>
        </form>
        <div v-if="posting" class="loading">
        <p><img src="@/assets/Ring-Preloader.gif" width="200px"/></p>
        </div>
        </div>
    <div v-if="apiError" class="error">
        <h2>API error. Please try again.</h2>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'Posts',
  data () {
    return {
      postReady: false,
      commentsReady: false,
      post: '',
      comments: '',
      apiError: false,
      email: '',
      newComment: '',
      posting: false
    }
  },
  methods: {
    // Sending new comment to the API
    createComment () {
      this.posting = true
      axios.post('comments', {
        postId: this.post.id,
        email: this.email,
        body: this.newComment
      }).then(response => {
        this.comments.push(response.data)
        this.posting = false
        this.newComment = ''
        this.email = ''
      })
    }
  },
  mounted () {
    axios.get('posts/' + this.$route.query.post).then(response => {
      this.post = response.data
      this.postReady = true
      axios.get('posts/' + this.$route.query.post + '/comments').then(response => {
        this.comments = response.data
        this.commentsReady = true
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.post {
  margin-bottom: 40px;
  margin: auto;
  text-align: left;
}
.comments {
    margin-top: 100px;
}
.comment {
    border-radius: 10px;
    background-color: #f8f7f7;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 0.9em;
}
.commentsTitle {
    margin-bottom: -40px;
}
.commentsCount {
    text-align: right;
    margin-bottom: 20px;
}
.addComment {
    margin-top: 100px;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
</style>
