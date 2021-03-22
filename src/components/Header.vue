<template>
  <b-navbar toggleable="lg" id="vHeader" type="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <div id="cont" v-for="dt in dataHeader" :key="dt.name">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item id="txtIcon" @click="handleFilterHeader(dt.categoryType)">
            <img :src="require('../../public/images/' + dt.icon)" />
            <p id="txtIcon">
              {{ dt.name }}
            </p>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
/* eslint-disable */
import { dataHeader } from "../dev-data/header";
export default {
  name: "Header",
  data() {
    return {
      dataHeader
    };
  },
  methods: {
    handleFilterHeader(el) {
      this.$emit("handleFilterHeader", el);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inter");
#vHeader {
  justify-content: center ;
}
#txtIcon {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 143%;
  margin: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.018em;

  /* Gray / 50 */

  color: #787885;
}
#cont {
  text-align: center;
}
</style>
