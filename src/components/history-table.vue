<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>{{ "Amount" | localize }}</th>
        <th>{{ "Date" | localize }}</th>
        <th>{{ "HistoryCategoryName" | localize }}</th>
        <th>{{ "Type" | localize }}</th>
        <th>{{ "Open" | localize }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, i) of records" :key="record.id">
        <td>{{ i + 1 }}</td>
        <td>{{ record.amount | currency("RUB") }}</td>
        <td>{{ record.date | date("datetime") }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span class="white-text badge red" :class="[record.typeClass]">{{
            record.typeText
          }}</span>
        </td>
        <td>
          <button
            class="btn-small btn"
            v-tooltip="'ShowRecord'"
            @click="$router.push(`/detail-record/${record.id}`)"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    records: {
      required: true,
      type: Array
    }
  }
};
</script>
