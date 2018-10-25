import { shallowMount } from '@vue/test-utils';
import QuiltSizeOption from './QuiltSizeOption.vue';

const optionData = {
    id: '12345',
    width: 10,
    height: 100,
};

const getQuiltSizeOption = ({
    data = optionData,
    isSelected = false,
    onClick = () => null,
} = {}) => shallowMount(QuiltSizeOption, {
    propsData: {
        data,
        isSelected,
        onClick,
    }
});

describe('QuiltSizeOption', () => {
    test('renders properly', () => {
        const wrapper = getQuiltSizeOption();
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('if prop.isSelected is true should add class focused', () => {
        const wrapper = getQuiltSizeOption();

        expect(wrapper.classes('focused')).toBe(false);

        wrapper.setProps({ isSelected: true });

        expect(wrapper.classes('focused')).toBe(true);
    });

    test('if prop.isSelected is true then aria-selected should be true', () => {
        const wrapper = getQuiltSizeOption();

        expect(wrapper.attributes('aria-selected')).toBe(undefined);

        wrapper.setProps({ isSelected: true });

        expect(wrapper.attributes('aria-selected')).toBe('true');
    });

    test('onClick should fire prop.onClick with the data.id', () => {
        const onClickStub = jest.fn();
        const wrapper = getQuiltSizeOption({ onClick: onClickStub });

        wrapper.trigger('click')

        expect(onClickStub.mock.calls.length).toBe(1);
        expect(onClickStub.mock.calls[0][0]).toBe(optionData.id);
    });
})
