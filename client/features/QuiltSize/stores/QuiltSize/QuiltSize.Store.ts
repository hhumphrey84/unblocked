import DefaultQuiltSizes from '../constants/DefaultQuiltSizes';

import actions from './QuiltSize.Actions';
import IQuiltSizeState from '../types/QuiltSizeState';
import mutations from './QuiltSize.Mutations';

const state = (): IQuiltSizeState => ({
    selectedId: DefaultQuiltSizes[0].id,
    sizes: DefaultQuiltSizes,
});

const QuiltSizeStore = {
    actions,
    mutations,
    namespaced: true,
    state,
};

export default QuiltSizeStore;
