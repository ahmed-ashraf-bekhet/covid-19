<template>
  <div class="container-fluid">
    <h2 style="color:white;">
      Just type the city name
    </h2>
    <h5>
      you must spelling correctly
    </h5>
    <div class="row">
      <div class="col-2"></div>
      <div class="form-group col-md-6">
        <input
          v-model="country"
          type="text"
          class="form-control h-150"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Country"
        />
      </div>
      <button
        type="button"
        @click="search"
        class="btn btn-primary col-md-2 h-25"
      >
        Submit
      </button>
      <div class="col-2"></div>
    </div>
    <h3 style="color:white;">{{active}}</h3>
    <h3 style="color:white;">{{recovered}}</h3>
    <h3 style="color:white;">{{deaths}}</h3>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  name: "Weather",
  data: () => {
    return {
      country: "",
      data: "",
      active:"",
      deaths:"",
      recovered:"",
    };
  },
  methods: {
    search() {
      axios
        .get(`https://api.covid19api.com/total/dayone/country/${this.country}`)
        .then((res) => {
          this.data = res.data;
          console.log(this.data[this.data.length - 1].Active);
          this.active = 'Active = '+this.data[this.data.length - 1].Active;
          this.recovered = 'Recovered = '+this.data[this.data.length - 1].Recovered;
          this.deaths = 'Deaths = '+this.data[this.data.length - 1].Deaths;
        })
        .catch();
    },
  },
};
</script>
