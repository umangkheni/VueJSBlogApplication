<template>
    <div class="overflow-auto">
      <!-- Use HTML and sub-components in slots -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        class="mt-4"
      >
        <template #first-text><span class="text-success">First</span></template>
        <template #prev-text><span class="text-danger">Prev</span></template>
        <template #next-text><span class="text-warning">Next</span></template>
        <template #last-text><span class="text-info">Last</span></template>
        <template #ellipsis-text>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
        </template>
        <template #page="{ page, active }">
          <b v-if="active">{{ page }}</b>
          <i v-else>{{ page }}</i>
        </template>
      </b-pagination>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          rows: 100,
          perPage: 10,
          currentPage: 1
        }
      }
    }
  </script>
