<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
// import { ref } from 'vue';

import { useQuery } from 'vue-query';
import axios from '@/util/axios';
import { ref, watch } from 'vue';
import { alertPopup } from '@/util/swal';
const { data: customers } = useQuery({
  queryKey: ['customers'],
  queryFn: async () => {
    const { data } = await axios.get(`http://localhost:3000/data/customers.json`);
    return data;
  },
  staleTime: Infinity
});
const selectedCustomer = ref();

watch(customers, () => {
  console.log(customers.value);
});

const onRowSelect = () => {
  alertPopup({ content: selectedCustomer.value?.name });
  setTimeout(() => {
    selectedCustomer.value = null;
  }, 10);
};
</script>

<template>
  <main>
    <DataTable
      v-model:selection="selectedCustomer"
      :value="customers"
      paginator
      :rows="5"
      removableSort
      :rowsPerPageOptions="[5, 10, 20, 50]"
      selectionMode="single"
      dataKey="name"
      :metaKeySelection="false"
      @rowSelect="onRowSelect"
      tableStyle="min-width: 50rem"
    >
      <Column field="name" header="Name" sortable></Column>
      <Column field="country.name" header="Country" sortable></Column>
      <Column field="company" header="Company" sortable></Column>
      <Column field="representative.name" header="Representative" sortable></Column>
    </DataTable>
  </main>
</template>
