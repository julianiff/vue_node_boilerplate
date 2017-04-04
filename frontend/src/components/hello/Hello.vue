<template>
  <div class="hello">
    <h1 class="hello__world">{{ msg }}</h1>
    {{ butttonColor }}

  </div>
</template>

<script>

  export default {

    name: 'test',
    component: 'test',
    data () {
      return {
        msg: 'The connection did not work, please make sure server is startet and stuff',
        butttonColor: 'black'
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
<style lang="scss">
  @import 'hello';
</style>
