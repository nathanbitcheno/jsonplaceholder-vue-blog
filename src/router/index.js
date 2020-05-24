import Vue from 'vue'
import Router from 'vue-router'
import PostsPage from '@/components/PostsPage'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostsPage',
      component: PostsPage
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
