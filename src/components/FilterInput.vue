<template>
  <div class="regex-filter-wraper">
    <input v-b-tooltip="{ html: true, hover: true, placement: 'top', boundary: 'window', title: 'Values 10 to 20:<br /> 10..20<br />Values exactly 50:<br /> =50' }" v-model="inputVal"  :placeholder="placeholder" @change="$_change" :class="`${hasError ? errorClass : ''}`">
  </div>
</template>

<script>
export default {
  name: 'filter-input',
  props: {
    value: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'e.g 10..20 =50' },
    errorClass: { type: String, default: 'invalid-regex-filter' },
  },
  data() {
    return {
      inputVal: '',
      hasError: false,
    };
  },
  created() {
    // Update component value
    this.$watch('value', (value) => {
      if (value) {
        const str = this.$_getValidateModelToString(value);
        if (str !== null) this.inputVal = str;
      }
    }, { deep: true, immediate: true });
  },
  methods: {
    $_change(event) {
      const model = this.$_stringToModel(event.target.value);
      const str = this.$_getValidateModelToString(model);
      if (str !== null) this.$emit('input', model);
    },
    $_getValidateModelToString(model) {
      const str = this.$_modelToString(model);
      this.hasError = str === null;
      return str;
    },
    $_stringToModel(string) {
      const str = string.trim();
      const indexOfDots = str.indexOf('..');
      if (indexOfDots === 0) {
        return [{ condition: 'less_equal', value: Number(str.substring(2)) || 0 }];
      } else if (indexOfDots > 0) {
        const spl = str.split('..');
        const model = [{ condition: 'greater_equal', value: Number(spl[0]) }];
        if (spl[1] !== '') model.push({ condition: 'less_equal', value: Number(spl[1]) || 0 });
        return model;
      } else if (str.indexOf('=') === 0) {
        return [{ condition: 'equal', value: Number(str.substring(1)) || 0 }];
      }
      return [];
    },
    $_modelToString(model) {
      let str = null;
      try {
        if (model.length === 2) {
          const [min, max] = model[0].value <= model[1].value ? model : [model[1], model[0]];
          if (min.condition === 'greater_equal' && max.condition === 'less_equal') {
            str = `${min.value}..${max.value}`;
          }
        } else if (model.length === 1) {
          const item = model[0];
          if (item.condition === 'equal') {
            str = `=${item.value}`;
          } else if (item.condition === 'less_equal') {
            str = `..${item.value}`;
          } else if (item.condition === 'greater_equal') {
            str = `${item.value}..`;
          }
        } else if (model.length === 0) {
          str = '';
        }
      } catch (err) {
        console.log(err);
      }
      return str;
    },
  },
};
</script>

<style lang="scss" scoped>
.regex-filter-wraper {
  padding: 0 2px;
  margin-top: -2px;
  margin-bottom: 2px;
  .invalid-regex-filter {
    width: 100%;
    border-color: #ff5454;
  }
}
</style>
