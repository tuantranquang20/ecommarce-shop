<template>
  <div class="parentx-static">
    <div>
      <img @click="handleBackHome" id="homeD" :src="require('../../public/images/home.png')" />
    </div>
    <div>
      <a-collapse
        id="itemFilter"
        v-for="(dt, index) in dataSidebar"
        :key="index"
      >
        <a-collapse-panel :header="dt.category" :key="index">
          <div id="itemSidebar">
            <p
              id="txtCat"
              v-for="(tp, i) in dt.type"
              :key="i"
              @click="handleFilterCat(tp, dt.categoryType)"
            >
              {{ tp.name }}
            </p>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import sidebar from "../../public/dev-datas/sidebar.json";

export default {
  name: "Sidebar",
  data: () => ({
    dataSidebar: sidebar
  }),
  methods: {
    handleFilterCat(key, category) {
      key["category"] = category;
      this.$emit("handleFilterCat", key);
    },
    handleBackHome(){
      console.log('ssss');
      this.$emit('handleBackHome')
    }
  }
};
</script>

<style>
.parentx-static {
  /* height: 100%; */
  position: fixed;
  margin-top: 20px;
  margin-left: 20px;
}
#itemFilter {
  margin-top: 5px;
}
#itemSidebar {
  padding-left: 30px;
  align-items: center;
}
#itemSidebar p:hover {
  cursor: pointer;
  background: rgb(238, 231, 252);
}
#txtCat {
  height: 30px;
  padding-top: 5px;
  padding-left: 15px;
}
#homeD{
  width: 300px;
  margin-top: -90px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
