export default function () {
  return {
    sortKey: this.sort.key,
    sortOrder: this.sort.order,
    sortField: this.sort.field || this.sort.key,
    currentPage: this.page,
    rows: [
      { content: '10 Rows', value: 10, selected: this.defaultRows === 10 },
      { content: '25 Rows', value: 25, selected: this.defaultRows === 25 },
      { content: '50 Rows', value: 50, selected: this.defaultRows === 50 },
      { content: '100 Rows', value: 100, selected: this.defaultRows === 100 },
    ],
    models: { search: '', selectAllCheckbox: false },
    filterModels: {},
    openDropdowns: {},
    paginationSize: this.defaultRows,
    localTableModel: {},
    localHeaderFields: [],
    isRendered: false,
    areScrolling: 0,
    saveSettingsLoading: false,
    touchedSettingsColumns: false,
  };
}
