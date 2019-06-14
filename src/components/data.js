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
      { content: '500 Rows', value: 500, selected: this.defaultRows === 500 },
      { content: '1000 Rows', value: 1000, selected: this.defaultRows === 1000 },
    ],
    models: { search: '', selectAllCheckbox: false },
    filterModels: {},
    openDropdowns: {},
    paginationSize: this.defaultRows,
    localTableModel: {},
    localHeaderFields: [],
    isRendered: false,
    tableWidth: 0,
    areScrolling: 0,
    saveSettingsLoading: false,
    touchedSettingsColumns: false,
    csvDownloadLoading: false,
    xlsDownloadLoading: false,
  };
}
