<template>
  <div class="item">
    <h1>Item</h1>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    uid: String,
    firstName: String,
    lastName: String,
    emoji: String,
    team: String,
    img: String,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
