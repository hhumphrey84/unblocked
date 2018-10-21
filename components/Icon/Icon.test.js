import { shallowMount } from '@vue/test-utils';
import Icon from './Icon.vue';

const iconProps = {
    title: 'SVG Title',
    id: 'unique-id',
    dataTestId: 'test_id',
};

const wrapper = shallowMount(Icon, {
    propsData: iconProps,
    slots: {
        default: ['<path id="icon-slot" />'],
    },
});

describe('Icon', () => {
    test('renders properly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('correctly sets the aria-labelledby attribute', () => {
        expect(wrapper.is(`[aria-labelledby="${iconProps.id}"]`)).toBe(true);
    });

    test('correctly sets the id of the title', () => {
        const title = wrapper.find('title');
        expect(title.is(`[id="${iconProps.id}"]`)).toBe(true);
    });

    test('correctly sets the data-test-id', () => {
        expect(wrapper.is(`[data-test-id="${iconProps.dataTestId}"]`)).toBe(true);
    });
})
