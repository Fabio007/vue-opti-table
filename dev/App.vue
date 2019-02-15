<template>
  <div class="container mt-2">

    <vue-opti-table-next name="demo-table"
      selectable
      v-model="tableModel"
      @on-sort="$_paginationChanged($event)"
      @on-search="$_searchExec($event)"
      @on-row-per-page-change="$_paginationChanged($event)"
      @on-pagination="$_paginationChanged($event)"
      :defaultRows="pageSize"
      :sort="{ key: 'email', order: 'asc' }"
      :serverSidePagination_UNUSED="serverSidePagination"
      :loading="loading"
      :pages="pageCount"
      :page="currentPage"
      :header-fields="$c_tableFields" 
      :items="table.items">
      <template slot="search">
        <vue-opti-select
          :list="[ { value: 'table1', content: 'Table 1' }, { value: 'table2', content: 'Table 2' } ]"
          class="col-sm-3"
          v-model="tableSelect"
          placeholder="Tables">
        </vue-opti-select>
      </template>

      <template slot="HEADER_email" slot-scope="props" >
        <b-btn size="sm" :pressed.sync="myToggle" variant="outline-info" block>{{props.item.content}}</b-btn>
      </template>
    </vue-opti-table-next>

  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueOptiTableNext from '../src/index';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import loader from './loader';
import { VueOptiSelect } from 'vue-opti-select';

Vue.use(BootstrapVue);
Vue.use(VueOptiTableNext);

export default {
  name: 'test',
  components: {VueOptiSelect},
  data,
  computed: {
    $c_tableFields () {
      if (this.tableSelect === 'table2') {
        return this.table.fields2
      } else {
        return this.table.fields
      }
    }
  },
  methods: {
    $_paginationChanged(evt) {
      this.$_loadData(evt);
    },
    $_searchExec(evt) {
      console.log(evt)
      this.$_loadData(evt);
      console.log(this.pageCount)
    },
    $_loadData({ page, limit, sortField, sortType, search, searchableFields }) {
      if (this.serverSidePagination) {
        this.loading = true;
        loader(page, limit, sortField, sortType, search, searchableFields).then((r) => {
          this.loading = false;
          this.table.items = r.data;
          this.pageSize = limit
          this.pageCount = Math.ceil(r.pageInfo.totalItemsCount / limit);
        }).catch(() => {
          this.loading = false;
        });
      }
    },
  },
  created() {
    this.$_loadData({ page: 0, limit: 10 });
  }
};
</script>
