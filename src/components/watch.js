export default { // eslint-disable-next-line
  'models.search': function (value) {
    if (!this.serverSidePagination) {
      this.currentPage = 1;
    }
  },
  items() {
    if (!this.serverSidePagination) {
      this.$_changePageAction(1);
    }
  },
  tableRows() {
    this.currentPage = 1;
  },
  defaultRows(newVal) {
    this.paginationSize = newVal;
  },
  localHeaderFields(newVal) {
    this.localTableModel.columnsOrder = newVal;
    this.$emit('click', this.localTableModel);
  },
  headerFields: {
    immediate: true,
    handler() {
      this.localTableModel = this.tableModel;
      this.localHeaderFields = this.headerFields;
      this.localTableModel.displayColumns = this.localHeaderFields.filter(field => field.display !== false);
      // if (window.localStorage.getItem(this.name)) {
      //   this.localTableModel.displayColumns = JSON.parse(window.localStorage.getItem(this.name)).displayColumns;
      //   this.localHeaderFields = JSON.parse(window.localStorage.getItem(this.name)).columnsOrder;
      // } else {
      //   this.localHeaderFields = this.headerFields;
      //   this.localTableModel.displayColumns = this.localHeaderFields.filter(field => field.display !== false);
      // }
      this.$emit('click', this.localTableModel);
    },
    deep: true,
  },
};
