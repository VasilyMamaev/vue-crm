<template>
  <div>
    <div class="page-title">
      <h3>{{ "Bill" | localize }}</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh()">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="isLoading" />

    <div class="row" v-else>
      <HomeBill :rates="currency.rates" />

      <HomeCurrency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/home-bill";
import HomeCurrency from "@/components/home-currency";

export default {
  data: () => ({
    isLoading: true,
    currency: null
  }),
  metaInfo() {
    return {
      title: this.$title("Home")
    };
  },
  components: {
    HomeBill,
    HomeCurrency
  },
  methods: {
    async refresh() {
      this.isLoading = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.currency.rates["EUR"] = 1;
      this.isLoading = false;
    }
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    this.currency.rates["EUR"] = 1;
    this.isLoading = false;
  }
};
</script>
