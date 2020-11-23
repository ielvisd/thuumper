import Button from '../Button.vue';

export default {
  title: 'Buttons/BaseButton',
  component: Button,
};

// https://www.learnstorybook.com/intro-to-storybook/vue/en/simple-component/
const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props">Thuumper</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  class: 'btn bg-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  class: 'btn bg-tertiary',
};
