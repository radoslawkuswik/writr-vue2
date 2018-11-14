import { getIsEqualToValues } from 'handy-validator';

export default {
  props: {
    title: {
      type: String,
      default: 'Please provide title!',
    },
    labels: {
      type: Array,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  methods: {
    onChange() {
      this.$store.dispatch(this.action, {
        item: this.item,
        value: this.value,
      });
    },
  },
  created() {
    this.options = getIsEqualToValues(this.validator);
  },
  data() {
    return {
      value: this.$store.getters.getValue(this.item),
      validator: this.$store.getters.getValidator(this.item),
      options: [],
    };
  },
};