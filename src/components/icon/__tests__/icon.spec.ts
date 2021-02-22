import { mount } from '@vue/test-utils';
import Icon from '@/components/icon/src/Icon.vue';

const name = 'name';

describe('Icon.vue', () => {
  it('create', async () => {
    const wrapper = mount(Icon, {
      props: {
        name,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes('x-icon')).toBe(true);
    expect(wrapper.text()).toBe(name);
  });

  test('prop color', async () => {
    const wrapper = mount(Icon, {
      props: {
        name,
        color: 'red',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.props('color')).toBe('red');
    expect(wrapper.attributes('style')).toContain('color: red');
    await wrapper.setProps({
      color: 'green',
    });
    expect(wrapper.attributes('style')).toContain('color: green');
  });

  it('prop size', async () => {
    const wrapper = mount(Icon, {
      props: {
        name,
        size: '36',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.props('size')).toBe('36');
    expect(wrapper.attributes('style')).toContain('font-size: 36px');
    await wrapper.setProps({
      size: 48,
    });
    expect(wrapper.attributes('style')).toContain('font-size: 48px');
  });

  it('prop type', async () => {
    const data = ['outlined', 'round', 'sharp', 'twoTone'];
    for (let i = 0; i < data.length; i++) {
      const wrapper = mount(Icon as any, {
        props: {
          name,
          type: data[i],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.classes(`x-icon__${data[i]}`)).toBe(true);
    }
  });

  it('bind click', () => {
    const onClick = jest.fn();
    const wrapper = mount(Icon, {
      props: {
        name,
      },
      attrs: {
        onClick: onClick,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
    expect(wrapper.attributes('style')).toContain('cursor: pointer');
  });
});
