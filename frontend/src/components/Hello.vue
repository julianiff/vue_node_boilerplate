<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {

  name: 'hello',

  data () {
    return {
      msg: 'The connection did not work, please make sure server is startet and stuff'
    }
  },
  mounted () {
    fetch('/api/test').then((response) => {
      return response.json()
    }).then((json) => {
      this.msg = json.test
    }).catch(() => {
      this.black = 'The connection did not work, please make sure server is startet and stuff'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 35px;
}

ul {
  list-style-type: none;
  padding: 15px;
}

li {
  display: inline-block;
  margin: 15px 15px;
  padding: 15px;
}

a {
  color: #42b983;
}
</style>
