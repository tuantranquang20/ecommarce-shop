<template>
  <div id="viewItem">
    <img :src="itemDetail.image" id="img" />
    <!-- <img :src="image" id="img" /> -->
    <p id="txtTitle">{{ itemDetail.description }}</p>
    <p id="price">${{ itemDetail.price }}</p>
    <p id="txtTitle">{{ itemDetail.category }}</p>
  </div>
</template>

<script>
/* eslint-disable */
//https://source.unsplash.com/random/300x300?sig=incrementingIdentifier
export default {
  name: "ItemDetail",
  props: {
    itemDetail: Object,
    image: String
  },
  data() {
    return {};
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

#viewItem {
  width: 260px;
  height: 500;
  border: 1px solid rgb(116, 115, 115);
  border-radius: 4px;
  margin: 10px;
}
#img {
  width: 225px;
  height: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  border-radius: 4px;
  object-fit: contain ;
}
#txtTitle {
  margin-left: 16px;
  margin-right: 16px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  letter-spacing: 0.0275em;

  /* Gray / 100 */

  color: #19191d;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
#price {
  margin-left: 16px;
  margin-right: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */

  display: flex;
  align-items: center;

  /* Dark Color */

  color: rgba(0, 0, 0, 0.87);
}
</style>
