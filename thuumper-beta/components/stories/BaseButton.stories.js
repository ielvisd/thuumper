import Button from '../Button.vue'

export default {
  title: 'Buttons/BaseButton',
  component: Button,
}

// https://www.learnstorybook.com/intro-to-storybook/vue/en/simple-component/
const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props">Thuumper</Button>',
})

export const BaseButton = Template.bind({})
BaseButton.args = {
  href: 'https://jiujits.io',
}

export const Alt = Template.bind({})
Alt.args = {
  to: '/',
}
