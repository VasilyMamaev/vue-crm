<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate @created="addNewCategory" />
        <CategoryEdit />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/category-create";
import CategoryEdit from "@/components/category-edit";

export default {
  name: "categories",
  data: () => ({
    categories: []
  }),
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
      console.log(this.categories);
    }
  },
  components: {
    CategoryCreate,
    CategoryEdit
  }
};
</script>
