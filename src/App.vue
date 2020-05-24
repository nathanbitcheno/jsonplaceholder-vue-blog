<template>
  <div id="app">
    <img src="./assets/jsonplaceholderbloglogo.png">
    <nav>
      <router-link class="menu" to="/">Home</router-link>
      <router-link class="menu" to="/">About</router-link>
      <router-link class="menu" to="/">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Comments from '@/components/Comments'
import Comment from '@/components/Comment'

export default {
  name: 'App',
  components: {
    Comments,
    Comment
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1100px;
  margin: auto;
  padding: 60px 0px 100px 0px;
}
.wrapper {
  width: 100%;
  max-width: 740px;
}
h1, h2 {
  font-weight: normal;
  text-transform: capitalize;
}
h3 {
    font-size: 1.1em;
}
.loading {
    text-align: center;
}
input, textarea {
  width: 90%;
  border: 0;
  border-radius: 10px;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #aedada;
}
button {
  padding: 10px;
  display: none;
  background: #eee;
  color: rgb(0, 110, 255);
  font-weight: bold;
  font-size: 1.1em;
  margin: 15px 15px 15px 0;
  border: none;
  cursor: pointer;
  display: inline;
}
button:hover {
  background: #cccccc;
}
nav {
  width: 100%;
  font-size: 1.2em;
  margin: -45px 0px 100px 0px;
  padding: 0px 0px 20px 0px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  text-align: right;
}
.menu {
  margin: 10px;
}
</style>
