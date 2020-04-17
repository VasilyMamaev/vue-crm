<template>
  <div>
    <Loader v-if="loading"/>
    <div class="app-main-layout" v-else>
      <Navbar @click="isOpen = !isOpen" />

      <Sidebar v-model="isOpen" />

      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/ui/navbar.vue";
import Sidebar from "@/components/ui/sidebar.vue";
import Loader from "@/components/ui/loader.vue";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
    loading: true
  }),
  components: {
    Navbar,
    Sidebar,
    Loader
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  }
};
</script>
