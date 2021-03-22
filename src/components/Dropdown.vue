<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      {{ titleSort }} <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item
        @click="onClick(dt)"
        v-for="dt in data"
        v-bind:key="dt.status"
      >
        {{ dt.sort }}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
/* eslint-disable */

export default {
  name: "Dropdown",
  props: {
    data: Array
  },
  data() {
    return {
      titleSort: "Sort"
    };
  },
  methods: {
    onClick(el) {
      this.titleSort = el.sort;
      this.$emit("handleSort", el.status);
    }
  }
};
</script>

<style></style>
