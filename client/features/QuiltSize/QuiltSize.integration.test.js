import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import QuiltSizeSelector from './components/QuiltSizeSelector/QuiltSizeSelector';
import QuiltSizeStore from './stores/QuiltSize/QuiltSize.Store';
import QuiltListTestIds from './components/constants/QuiltListTestIds';
import randomNumberWithExclusion from './utils/randomNumberWithExclusion';


const localVue = createLocalVue();

localVue.use(Vuex);

const findAllOptions = wrapper => wrapper.findAll(`[data-test-id=${QuiltListTestIds.OPTION}]`);

describe('QuiltSizeSelector', () => {
    let store;
    let getComponent;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                quiltSize: QuiltSizeStore,
            }
        });

        getComponent = () => mount(QuiltSizeSelector, { store, localVue });
    });

    it('should render the correct amount of options', () => {
        const wrapper = getComponent();
        const options = findAllOptions(wrapper);
        const { sizes } = store.state.quiltSize;

        expect(options.length).toBe(sizes.length);
    });

    it('the options rendered should match the sizes within the state', () => {
        const wrapper = getComponent();
        const options = findAllOptions(wrapper);;
        const { sizes } = store.state.quiltSize;

        sizes.forEach((size, i) => {
            const optionValue = options.at(i).attributes('data-test-value');

            expect(optionValue).toBe(size.id);
        });
    });

    it('should add focused class to the correct selected option', () => {
        const wrapper = getComponent();
        const { selectedId } = store.state.quiltSize;
        const selectedOption = wrapper.find(`[data-test-value=${selectedId}]`);

        expect(selectedOption.classes()).toContain('focused');
    });

    it('should set a new selected option when clicked', () => {
        const wrapper = getComponent();
        const options = findAllOptions(wrapper);;
        const currentSelectedIndex = options.wrappers.findIndex(
            option => option.attributes('data-test-value') === store.state.quiltSize.selectedId
        );
        const randomIndex = randomNumberWithExclusion(0, options.length - 1, currentSelectedIndex);
        const targetOption = options.at(randomIndex);

        expect(targetOption.classes()).not.toContain('focused');

        targetOption.trigger('click');

        expect(targetOption.classes()).toContain('focused');
    });
});
