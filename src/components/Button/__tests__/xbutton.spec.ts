import { shallowMount } from '@vue/test-utils';
import XButton from '@/components/Button/XButton.vue';

describe('XButton.vue', () => {
  it('create', () => {
    const wrapper = shallowMount(XButton);
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes('x-button')).toBe(true);
  });

  it('nativeType', async () => {
    const data = ['button', 'submit', 'reset'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          nativeType: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.attributes('type')).toBe(data[i]);
    }
  });

  it('stylus', async () => {
    const data = ['text', 'icon', 'outlined', 'contained', 'toggle'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          stylus: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes(`x-button__${data[i]}`)).toBe(true);
    }
  });

  it('type', () => {
    const data = ['flat', 'fab'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          type: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes(`x-button__${data[i]}`)).toBe(true);
    }
  });

  it('ripple', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          ripple: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes('x-button__ripple')).toBe(data[i]);
    }
  });

  it('round', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          round: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes('x-button__round')).toBe(data[i]);
    }
  });

  it('small', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          small: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes('x-button__small')).toBe(data[i]);
    }
  });

  it('block', async () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          block: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes('x-button__block')).toBe(data[i]);
    }
  });

  it('disabled', () => {
    const data = [true, false];
    for (let i = 0; i < data.length; i++) {
      const wrapper = shallowMount(XButton as any, {
        props: {
          disabled: data[i],
        },
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.classes('x-button__disabled')).toBe(data[i]);
    }
  });
});
