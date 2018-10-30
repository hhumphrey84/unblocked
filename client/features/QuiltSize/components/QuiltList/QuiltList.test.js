import { shallowMount } from '@vue/test-utils';
import QuiltList from './QuiltList.vue';
import QuiltListTestIds from '../constants/QuiltListTestIds';

const options = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
];

const selectedOptionId = options[1].id;

const wrapper = shallowMount(QuiltList, {
    propsData: {
        options,
        selectedOptionId,
        onOptionClick: () => null,
    }
})

describe('QuiltList', () => {
    test('renders properly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('should contain a title', () => {
        const title = wrapper.find(`[data-test-id=${QuiltListTestIds.TITLE}]`);

        expect(title.exists()).toBe(true);
    });

    test('should contain a list', () => {
        const list = wrapper.find(`[data-test-id=${QuiltListTestIds.LIST}]`);

        expect(list.exists()).toBe(true);
    });

    test('the id of the title should match the aria-labelledby value', () => {
        const title = wrapper.find(`[data-test-id=${QuiltListTestIds.TITLE}]`);
        const list = wrapper.find(`[data-test-id=${QuiltListTestIds.LIST}]`);

        expect(title.attributes('id')).toBe(list.attributes('aria-labelledby'));
    });

    test('should render options equal to the length of props.options', () => {
        const options = wrapper.findAll(`[data-test-id=${QuiltListTestIds.OPTION}]`);

        expect(options.length).toBe(options.length);
    });
});
