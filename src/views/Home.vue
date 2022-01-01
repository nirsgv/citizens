<template>
  <div class="home">
    {{ citizens }}
    <Item msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";
import apiService from "../services/service";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Item,
  },
  async created() {
    const { data } = await apiService.get("http://localhost:3000/books");
    this.setItemsM(data);
  },
  computed: {
    ...mapGetters(["citizens"]),
  },
  methods: {
    ...mapActions("setItems"),
    setItemsM() {
      this.setItems();
    }
  },
};
</script>
