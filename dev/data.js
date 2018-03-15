export default function () {
  return {
    table: {
      fields: [
        {
          header: { content: 'Name', style: '' },
          item: {
            key: 'name',
            content: item => item.name,
            sortable: true,
            searchable: true,
            style: { cursor: 'pointer' },
          },
        },
        {
          header: { content: 'Status', style: '' },
          item: {
            key: 'status',
            content: item => item.status,
            sortable: true,
            searchable: true,
            style: { textAlign: 'center' },
            total: {
              content: totals => 'Total: ',
              style: { background: '#fffdf5', fontWeight: 'bold', textAlign: 'center' },
            },
          },
        },
        {
          header: { content: 'Duplicate', style: '' },
          item: {
            key: 'isDuplicate',
            content: item => item.isDuplicate,
            sortable: true,
            searchable: true,
            style: { textAlign: 'center' },
          },
        },
        {
          header: { content: 'Traffic Source', style: '' },
          item: {
            key: 'ts_type',
            content: item => item.ts_type,
            sortable: true,
            searchable: true,
            style: { textAlign: 'center' },
          },
        },
        {
          header: { content: 'Tracker', style: '' },
          item: {
            key: 'tr_type',
            content: item => item.tr_type,
            sortable: true,
            searchable: true,
            style: { textAlign: 'center' },
          },
        },
      ],
      items: [
        {
          _id: '5a9d1cb19e8afbcdacc7196a',
          campaign_id_ts: '5317587',
          ts_account: 68,
          user_id: 7,
          name: 'Bruno Fluent Binom PPA',
          name_ts: 'Bruno Fluent Binom PPA',
          status: 'out of funds',
          campaign_id_tr: '4',
          tr_account: 32,
          isDuplicate: false,
          ts_type: 'PopAds',
          tr_type: 'Binom',
          bid: {
            value: null,
            type: 'unsupported',
          },
          dailyBudget: {
            value: null,
            type: 'unsupported',
          },
          totalBudget: {
            type: 'limited',
            value: -0.3108839988708496,
          },
        },
        {
          _id: '5a9d1cb19e8afbcdacc7196c',
          campaign_id_ts: '5345083',
          ts_account: 68,
          user_id: 7,
          name: 'OPTM LSD PA BNM Demo 1',
          name_ts: 'OPTM LSD PA BNM Demo 1',
          status: 'out of funds',
          campaign_id_tr: '7',
          tr_account: 32,
          isDuplicate: true,
          ts_type: 'PopAds',
          tr_type: 'Binom',
          bid: {
            value: null,
            type: 'unsupported',
          },
          dailyBudget: {
            value: null,
            type: 'unsupported',
          },
          totalBudget: {
            type: 'limited',
            value: -0.11588399857282639,
          },
        },
        {
          _id: '5a9d1cb19e8afbcdacc7196e',
          campaign_id_ts: '5453131',
          ts_account: 68,
          user_id: 7,
          name: 'OPTM LSD PA BNM Demo 1',
          name_ts: 'OPTM LSD PA BNM Demo 1.1',
          status: 'out of funds',
          campaign_id_tr: '7',
          tr_account: 32,
          isDuplicate: true,
          ts_type: 'PopAds',
          tr_type: 'Binom',
          bid: {
            value: null,
            type: 'unsupported',
          },
          dailyBudget: {
            value: null,
            type: 'unsupported',
          },
          totalBudget: {
            type: 'limited',
            value: -0.12758100032806396,
          },
        },
        {
          _id: '5a9d1cb19e8afbcdacc71972',
          campaign_id_ts: 'caae4340-f9e3-11e7-809f-0ec5f5cbb90a',
          ts_account: 59,
          user_id: 7,
          name: '#IT# Android 3g test2 zp',
          name_ts: '#IT# Android 3g test2',
          status: 'paused',
          campaign_id_tr: '12292',
          tr_account: 31,
          isDuplicate: false,
          ts_type: 'ZeroPark',
          tr_type: 'Thrive',
          bid: {
            value: 0.0025,
            type: 'cpv',
          },
          dailyBudget: {
            value: 20,
            type: 'limited',
          },
          totalBudget: {
            type: 'limited',
            value: 100,
          },
        },
        {
          _id: '5a9d1cb19e8afbcdacc71973',
          campaign_id_ts: '11597120-f9e9-11e7-809f-0ec5f5cbb90a',
          ts_account: 59,
          user_id: 7,
          name: '#JP# Android test zp',
          name_ts: '#JP# Android test zp',
          status: 'paused',
          campaign_id_tr: '12295',
          tr_account: 31,
          isDuplicate: false,
          ts_type: 'ZeroPark',
          tr_type: 'Thrive',
          bid: {
            value: 0.006,
            type: 'cpv',
          },
          dailyBudget: {
            value: 20,
            type: 'limited',
          },
          totalBudget: {
            type: 'limited',
            value: 100,
          },
        },
      ],
    },
  };
}
