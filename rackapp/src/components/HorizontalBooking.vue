<template>
  <div class="horizontal-booking">

    <div class="timeline">

      <template v-for="slot in slots">

        <input type="checkbox" v-model="booked"
                :id="slot.slot" :name="slot.slot"
                :value="slot.slot" :disabled="slot.reserved" />

        <label class="timeslot" v-bind:class="{ reserved: slot.reserved }" :for="slot.slot">
             <div class="time">{{ slot.slot * 1000 | moment("MMM Do, ha") }}</div>
             <span></span>
        </label>

       </template>


    </div>


  </div>

</template>

<script>
export default {
  name: 'horizontal-booking',
  props: ['rackName', 'rackActivity'],
  methods: {

    getSlots: function() {
      this.$http.get('http://pathfinder.octanis.org/rackapp/api/racks/'+encodeURI(this.rackName)+'/reservations/'+encodeURI(this.rackActivity)).then(response => {
        this.slots = response.body;
      }, response => {
        // error callback
      });
    }
  },
  data () {
    return {
      booked: [],
      slots: []
    }
  },
  watch: {
    booked : function(){
      this.$emit('bookedSlotsChanged', this.booked)
    }
  },
  created() {
    this.getSlots();
  }
}
</script>


<style>


input[type="checkbox"] {
    display: none;
}

input[type="checkbox"] + label {

}

input[type="checkbox"] + label span:after {
    content: "+";
}

input[type="checkbox"]:checked + label {
    background: yellow;
}

input[type="checkbox"]:checked + label span:after {
     content: "•";
}

.horizontal-booking {
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
}

.timeline {
  display: flex;
  padding-top: 50px;
  padding-bottom: 13px;
  width: 100%;
}

.timeslot {
  background: #90b83d;
  flex: 0 0 200px;
  padding: 50px 0;
  border-right: 2px solid black;
}

.timeslot span {
  font-size:50pt;
}

.time {
  transform: translateX(-20px);
  margin: -86px -2px 0 0;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  background: black;
  padding: 10px;
}


.reserved {
  background: red;
}

</style>
