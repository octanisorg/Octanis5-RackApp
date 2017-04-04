<template>
  <div id="itembooking" class="padded">
    {{booked}}

    <h1>{{rackName}}: {{itemName}} <a to="" class="btn btn--large btn--default cta">Guide</a> </h1>


    <horizontal-booking v-bind:rackName="rackName" v-bind:rackActivity="itemName" @bookedSlotsChanged="bookingUpdate"></horizontal-booking>
    <br/>

    <!-- for non-octanis -->
    <input type="text" name="what" value="What are you doing?">
    <!-- for all guests -->
    <input type="text" name="email" value="What is your email?">

    <router-link to="" class="btn btn--large btn--default cta" style="color:#ffc600">Book {{itemName}} Time</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link :to="{ name: 'rackItems', params: { rackName }}" class="btn btn--large btn--default cta">Cancel</router-link>

  </div>

</template>

<script>
import HorizontalBooking from './HorizontalBooking.vue'

export default {
  name: 'itembooking',
  props: ['rackName','itemName'],
  methods: {
    bookingUpdate: function(booked){
      this.booked = booked
    }
  },
  components: {
    HorizontalBooking
  },
  data: function() {
      return {
        booked: []
      }
  }
}
</script>

<style>

</style>
