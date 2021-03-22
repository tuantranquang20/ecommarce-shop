<template>
  <div>
    <div id="itemView" v-for="item in items" :key="item.id">
      <ItemDetail v-bind:itemDetail="item" v-bind:image="image" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ItemDetail from './ItemDetail'
export default {
  name: 'ItemEco',
  components:{
    ItemDetail
  },
  props: {
    items : {
      type : Array,
      default : []
    }
  },
  data () {
    return {
        image : 'https://source.unsplash.com/random/225x225'
    };
  }
}
</script>
<style>
#itemView{
  display: flex;
  float: left;
}
</style>
