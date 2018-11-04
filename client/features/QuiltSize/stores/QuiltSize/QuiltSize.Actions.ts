import { ActionTree } from 'vuex';
import { IRootState } from 'store';

import IQuiltSizeState from '../types/QuiltSizeState';

const changeSelected = ({ commit }, selectedOptionId: string): any => {
    commit('setSelected', selectedOptionId);
};

const actions: ActionTree<IQuiltSizeState, IRootState> = {
    changeSelected,
};

export {
    actions as default,
    changeSelected,
};
