import { shallowMount } from '@vue/test-utils';
import Icon from './Icon.vue';

describe('Icon', () => {
    test('mounts properly', () => {
        const wrapper = shallowMount(Icon, {
            propsData: {
                title: 'SVG Title',
                id: 'unique-id',
            },
            slots: {
                default: ['<path data-test-id="Icon-slot" />'],
            },
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('renders properly', () => {
        const wrapper = shallowMount(Icon, {
            propsData: {
                title: 'SVG Title',
                id: 'unique-id',
            },
            slots: {
                default: ['<path data-test-id="Icon-slot" />'],
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})
