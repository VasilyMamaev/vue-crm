<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="record !== null">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">{{
          "History" | localize
        }}</router-link>
        <a @click.prevent class="breadcrumb">
          {{ record.type === "income" ? "Доход" : "Расход" }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card" :class="record.type === 'income' ? 'green' : 'red'">
            <div class="card-content white-text">
              <p>{{ "Description" | localize }}: {{ record.description }}</p>
              <p>
                {{ "HistoryCurrency" | localize }}:
                {{ record.amount | currency }}
              </p>
              <p>
                {{ "HistoryCategoryName" | localize }}:
                {{ record.categoryName }}
              </p>
              <small>{{ record.date | date("datetime") }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- пофиксить баг с отображением несуществующего id -->
    <p class="center" v-else>
      {{ "Record" | localize }} <strong>{{ this.$route.params.id }}</strong>
      {{ "RecordNotFound" | localize }}
    </p>
  </div>
</template>

<script>
export default {
  name: "detail-record",
  metaInfo() {
    return {
      title: this.$title("DetailTitle")
    };
  },
  data: () => ({
    record: null,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id;
    const record = await this.$store.dispatch("fetchRecordById", id);
    const category = await this.$store.dispatch(
      "fetchCategoryById",
      record.categoryId
    );

    this.record = {
      ...record,
      categoryName: category.title
    };
    this.loading = false;
  }
};
</script>
