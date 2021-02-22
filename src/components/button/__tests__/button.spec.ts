import { mount } from '@vue/test-utils';
import Button from '@/components/button/src/Button.vue';

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes('x-button')).toBe(true);
  });

  it('slot default', () => {
    const text = '按钮';
    const wrapper = mount(Button, {
      slots: {
        default: text,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain(text);
  });

  it('prop nativeType', async () => {
    const data = ['button', 'submit', 'reset'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          nativeType: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.attributes('type')).toBe(data[i]);
    }
  });

  it('prop stylus', async () => {
    const data = ['text', 'icon', 'outlined', 'contained', 'toggle'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          stylus: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes(`x-button__${data[i]}`)).toBe(true);
    }
  });

  it('prop type', () => {
    const data = ['flat', 'fab'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          type: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes(`x-button__${data[i]}`)).toBe(true);
    }
  });

  it('prop ripple', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          ripple: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes('x-button__ripple')).toBe(data[i]);
    }
  });

  it('prop round', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          round: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes('x-button__round')).toBe(data[i]);
    }
  });

  it('prop small', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          small: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes('x-button__small')).toBe(data[i]);
    }
  });

  it('prop block', async () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          block: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes('x-button__block')).toBe(data[i]);
    }
  });

  it('prop disabled', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Button as any, {
        props: {
          disabled: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes('x-button__disabled')).toBe(data[i]);
    }
  });
});
