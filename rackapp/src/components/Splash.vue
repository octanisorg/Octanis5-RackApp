<template>

<div class="dimmed">

  <header class="clearfix full padded">
      <div class="logo pull-left">
        <h1 class="mrg0"><a href="/"><img src="http://octanis.org/img/white_logo.png"></a>   </h1>
      </div>

      <div class="masterhead relative-parent">
        <h1 class="oc-brand-indicator">Octanis {{rackName}}</h1><br/><br/>
        <router-link :to="{ name: 'rackItems', params: { rackName }}" class="btn btn--large btn--default cta">Get Started</router-link>
      </div>

  </header>


  <div id="pagebg">
    <img src="http://octanis.org/img/header1.jpg" alt="">
  </div>


</div>

</template>

<script>
export default {
  props: ['rackName'],
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
