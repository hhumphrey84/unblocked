import { shallowMount } from '@vue/test-utils';
import Header from './Header.vue';

const wrapper = shallowMount(Header);

describe('Header', () => {
    test('renders properly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });
})
