<template>
  <div>
    <input v-model="input" />
    <tr>
      <th>Data</th>
    </tr>
    <tr v-for="item in filtered" :key="item.key">
      <td>{{ item }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      list: [],
      filtered: [],
    };
  },
  watch: {
    input: {
      handler(val) {
        if (val !== "") {
          this.filtered = this.list.filter((el) =>
            el.toLowerCase().match(val.toLowerCase())
          );
        } else {
          this.filtered = this.list;
        }
      },
    },
  },
  mounted() {
    this.axios.get("https://api.publicapis.org/categories").then((response) => {
      this.list = this.filtered = response.data;
    });
  },
};
</script>

<style>
</style>