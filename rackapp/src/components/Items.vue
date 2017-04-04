<template>

  <div class="padded">
    <h1>What will you do today?</h1>

    <div id="items">
      <div class="item" v-for="activity of activities">

        <router-link :to="{ name: 'rackItem', params: { rackName, itemName: activity.activity }}">
          <img v-bind:src="'data:image/png;base64,' + activity.jpeg" />
          <h2>{{activity.activity}}</h2>
        </router-link>
      </div>



    </div>

  </div>

</template>

<script>
export default {
  name: 'items',
  props: ['rackName'],
  methods: {
    getActivities: function() {
      this.$http.get('http://pathfinder.octanis.org/rackapp/api/racks/'+encodeURI(this.rackName)).then(response => {
        this.activities = response.body;
      }, response => {
        // error callback
      });
    }
  },
  data () {
    return {
        activities: 0
    }
  },
  created() {
    this.getActivities();
  }
}
</script>

<style>
.item{
  flex-wrap: wrap;
  border-bottom: 4px solid #ffc600;
  width: 20%;
  margin: 5%;
  float: left;
}

.item img {
  width: 100%;
  filter: brightness(45%);
  -webkit-filter: brightness(45%);
  -moz-filter: brightness(45%);
  -o-filter: brightness(45%);
  -ms-filter: brightness(45%);
}

.item img:hover {
  width: 100%;
  filter: brightness(100%);
  -webkit-filter: brightness(100%);
  -moz-filter: brightness(100%);
  -o-filter: brightness(100%);
  -ms-filter: brightness(100%);
}

h2 {
  position: absolute;
  width:100%;
  color: white;
  font-weight: bold;
  padding: 5px;
  font-size: 2.5em;
  margin-top: -1.5em;
}
</style>
