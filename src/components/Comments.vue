<script>
import Vue from 'vue'

Vue.component('Comments', {
  props: ['comments'],
  template: `
  <div>
    <h2 class="commentsTitle">// Comments</h2>
    <h4 class="commentsCount">{{ comments.length }} Comments</h4>
    <div v-for="(comment, id) in comments" class="comment" :key="id">
       <Comment :comment="comment"></Comment>
    </div>
  </div>`
})
</script>
