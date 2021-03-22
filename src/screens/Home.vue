<template>
  <div>
    <Header @handleFilterHeader="handleFilterHeader" />
    <div class="content">
      <Sidebar @handleFilterCat="handleFilterCat" @handleBackHome="handleBackHome"/>
    </div>
    <div id="prd">
      <Dropdown v-bind:data="sortDrop" @handleSort="handleSort" />
      <ItemEco v-bind:items="items" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ItemEco from "../components/ItemEco";
import Dropdown from "../components/Dropdown";
import itemJson from "../../public/dev-datas/item.json";
import { handleStatusSort } from "../ultils/helper";
export default {
  name: "HomePage",
  components: {
    Header,
    Sidebar,
    ItemEco,
    Dropdown
  },
  data() {
    return {
      items: [],
      sortDrop: [
        { status: 0, sort: "Sort By Price" },
        { status: 1, sort: "Sort By ID" },
        { status: 2, sort: "Sort By Category" }
      ],
      sortBy: "price"
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      this.items = itemJson;
    },
    handleSort(el) {
      //0,1,2
      let result = handleStatusSort(el);
      this.sortBy = result.sort;
      this.items.sort((a, b) => (a[this.sortBy] > b[this.sortBy] ? 1 : -1));
    },
    handleFilterCat(type) {
      this.getProduct();
      let result = this.items
        .filter(el => el.type === type.type)
        .filter(el => el.category === type.category);
      this.items = result;
    },
    handleFilterHeader(el) {
      this.getProduct();
      let result = this.items.filter(x => x.category === el);
      this.items = result;
    },
    handleBackHome(){
      this.getProduct();
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
.content {
  /* display: flex; */
  /* flex-direction: row; */
}
#prd {
  margin-left: 400px;
}
@media only screen and (max-width: 990px) {
  /* For mobile phones: */
  .content {
    /* display: none; */
  }
}
</style>
