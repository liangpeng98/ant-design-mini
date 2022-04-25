Component({
  props: {
    value: {},
  },
  data: {
    number: 1,
    currency: 'rmb',
    array: [[
      'rmb',
      'dollar',
    ]],
  },
  methods: {
    triggerChange(changedValue) {
      const { onChange, value } = this.props;
      const { number, currency } = this.data;
      if (onChange) {
        onChange({
          number,
          currency,
          ...value,
          ...changedValue,
        });
      }
    },
    onNumberChange(e) {
      const newNumber = e.detail.value;
      if (!('number' in this.props.value)) {
        this.setData({
          number: newNumber,
        });
      }
      this.triggerChange({
        number: newNumber,
      });
    },
    onCurrencyChange(value) {
      const newCurrency = value[0]
      if (!('currency' in this.props.value)) {
        this.setData({
          currency: newCurrency,
        });
      }
      this.triggerChange({
        currency: newCurrency,
      });
    },
  },
});
