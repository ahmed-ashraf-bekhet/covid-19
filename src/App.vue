<template>
  <div id="app">
    <nav class="nav">
  <router-link to="/covid"><p class="option" >Covid-19</p></router-link>
  <router-link to="/"> <p class="option" >Home</p></router-link>
</nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
  position: absolute;
  right: 10px;
  top:400px;
  width: 200px;
  height: 120px;
  transform: rotate(90deg);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.option{
  color:white;
  padding: 10px;
}
</style>
