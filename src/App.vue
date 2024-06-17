<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link><br/>
    <router-link to="/databindinghtml">Data Binding HTML</router-link> |
    <router-link to="/databindinginputtext">Data Binding Input Text</router-link> |
    <router-link to="/databindinginputnumber">Data Binding Input Number</router-link> |
    <router-link to="/nestedcomponent">Nested Components</router-link><br/>
    <router-link to="/parentcomponent">Patent Component</router-link> |
    <router-link to="/DATabindingtextarea">DataBindingTextarea</router-link> |
    <router-link to="/DataBindingSelect">DataBindingSelect</router-link> |
    <router-link to="/DataBindingCheckbox">DataBindingCheckbox</router-link><br/>
    <router-link to="/DataBindingRadio">DataBindingRadio</router-link> |
    <router-link to="/DataBindingButton">DataBindingButton</router-link> |
    <router-link to="/DataBindingClass">DataBindingClass</router-link> |
    <router-link to="/DataBindingList">DataBindingList</router-link><br/>
    <router-link to="/EventClick">EventClick</router-link> |
    <router-link to="/TestComWat">TestComWat</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
