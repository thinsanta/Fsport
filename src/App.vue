<template>
  <div id="nav">
    <router-link to="/lobby">Lobby</router-link> |
    <router-link to="/account">Account</router-link>  |
    <router-link to="/messages">Messages</router-link>
  </div>
  <router-view/>
</template>

<style>
body{
  margin: 0;
  background: linear-gradient(90deg, #a204a2 -33%,#161618 100%,#ff0c85);
 
  height: 100%;
}
#app {
  font-family: Exo,Helvetica,sans-serif;
  font-weight: 800;
  text-align: center;
  color: #dbd7db;
  margin: 0;
  padding: 0;
  
}

#nav {
  padding: 30px;
  background-color: #1d1d26;
  text-align: left;
}
#nav a:hover{
  text-decoration-color: rgb(255, 0, 106);
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px 25px;
  color: #dbd7db;
  text-decoration: none;
  font-size: 18px;
  text-decoration: underline 0.15em rgba(255, 255, 255, 0);
  transition: text-decoration-color 400ms;
}

#nav a.router-link-exact-active {
  color: #E78C00;
}


</style>
