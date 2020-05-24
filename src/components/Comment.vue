<script>
import Vue from 'vue'

Vue.component('Comment', {
  props: ['comment'],
  template: `
  <div>
    <h3>Posted By: {{ comment.email }}</h3>
    <p>{{ comment.body }}</p>
  </div>`
})
</script>
